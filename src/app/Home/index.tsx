import React from 'react'

const Home = () => {
  return (
    <main className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6  text-[#E8C999]">Welcome to the Online Test Platform</h1>
      <p className="text-lg text-gray-700">
        Prepare, practice, and perform better.
      </p>
      <p className="mt-4 text-gray-600">
        Our platform allows you to take mock tests, evaluate your answers, and improve your performance over time. Whether
        you&apos;re studying for exams or just testing your skills, we&apos;re here to help you succeed.
      </p>
      <div className="mt-8">
        <a
          href="/About"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}

export default Home