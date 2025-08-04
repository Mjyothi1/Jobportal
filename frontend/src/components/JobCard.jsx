const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h3 className="text-xl font-semibold text-cyan-300">{job.title}</h3>
      <p className="text-gray-300 mt-1">{job.description}</p>
      <div className="text-sm mt-2 text-gray-400">
        <p>🛠 Skills: {job.skills.join(", ")}</p>
        <p>📍 Location: {job.location}</p>
        <p>💰 Budget: ₹{job.budget}</p>
        <p>👤 Posted by: {job.postedBy?.name || "Anonymous"}</p>
      </div>
    </div>
  );
};

export default JobCard;
