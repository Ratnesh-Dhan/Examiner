import React from 'react'

const about = () => {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#E8C999]">About This App</h1>
      <p className="text-lg text-gray-700">
        Welcome to our Online Test Platform — a simple and efficient way to practice and evaluate your knowledge.
      </p>
      <p className="mt-4 text-gray-600">
        This web app is currently under development. We&apos;re building it to allow users to take tests, get instant feedback,
        and track their performance over time. Whether you&apos;re preparing for competitive exams or just want to test your skills,
        this platform aims to make that experience smooth and accessible.
      </p>
      <p className="mt-4 text-gray-600">
        Stay tuned for more features like timed quizzes, analytics, and personalized recommendations!
      </p>
    </main>
  );
}

export default about