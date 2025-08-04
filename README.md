# 🧑‍💻 RizeOS Job Portal

A full-stack decentralized job & networking platform for developers, built as part of the RizeOS Core Team Internship challenge.

Live Demo: [https://jobportal-six-ivory.vercel.app](https://jobportal-six-ivory.vercel.app)

---

## 🌐 Tech Stack

* **Frontend:** React, Tailwind CSS, Context API, React Router
* **Backend:** Node.js, Express.js, MongoDB Atlas
* **Blockchain:** MetaMask + ethers.js (Goerli Testnet)
* **AI Integration:** Google Gemini 1.5 Flash (via Generative AI API)
* **Deployment:** Vercel (frontend) & Render (backend)

---

## 🔑 Features

### 👤 User Authentication

* Register/login with JWT-based authentication
* Auth state persisted using Context + localStorage

### 🙍 User Profile

* Update name, bio, LinkedIn, wallet address, skills
* Auto skill extraction (optional via Gemini)

### 💼 Job Marketplace

* View job listings with skill filters
* Post new jobs with title, budget, skills, location
* Only logged-in users can post

### 🧠 AI Skill Match

* Gemini 1.5 Flash evaluates match % between user and job
* Match score displayed on job cards

### 🦊 Web3 Payments

* Users must send 0.001 ETH to admin wallet to post a job
* MetaMask integration with ethers.js
* Tx hash is verified server-side before accepting job post

---

## 🚀 Getting Started

### 🛠 Backend Setup

```bash
git clone https://github.com/your-username/jobportal.git
cd backend
npm install
npm start
```

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 🔑 .env (Backend)

```
PORT=5000
MONGO_URI=your-mongo-uri
JWT_SECRET=your-secret
ADMIN_WALLET_ADDRESS=0xYourGoerliWallet
INFURA_API_KEY=your-infura-key
GOOGLE_API_KEY=your-google-api-key
```

---

---

## 🧠 AI Integration

Gemini 1.5 Flash is used for:

* Extracting top skills from user's bio
* Calculating match score between profile and job

Handled via server-side API using Google Generative AI SDK.

---

## 🔐 Web3 + Payment Flow

* User connects MetaMask
* Sends 0.001 ETH to admin wallet
* Tx hash is verified via Infura + ethers
* Only then job is posted to DB

---
