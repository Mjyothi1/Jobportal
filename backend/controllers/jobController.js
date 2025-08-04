import Job from '../models/Job.js';

// POST /api/jobs
export const createJob = async (req, res) => {
  const { title, description, skills, budget, location } = req.body;

  if (!title || !description || !skills) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  try {
    const job = new Job({
      title,
      description,
      skills,
      budget,
      location,
      postedBy: req.user._id
    });

    const saved = await job.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Job creation failed', error: err.message });
  }
};

// GET /api/jobs
export const getJobs = async (req, res) => {
  try {
    const { skill, location, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (skill) filter.skills = { $in: [skill] };
    if (location) filter.location = new RegExp(location, 'i');

    const skip = (Number(page) - 1) * Number(limit);

    const total = await Job.countDocuments(filter);
    const jobs = await Job.find(filter)
      .populate('postedBy', 'name')
      .sort({ createdAt: -1 }) // newest first
      .skip(skip)
      .limit(Number(limit));

    res.json({
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      totalJobs: total,
      jobs
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jobs', error: err.message });
  }
};

// GET /api/jobs/:id
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('postedBy', 'name');
    if (!job) return res.status(404).json({ message: 'Job not found' });

    res.json(job);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching job', error: err.message });
  }
};
