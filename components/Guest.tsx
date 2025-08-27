'use client';

import React from 'react';
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Guest: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Sleep Smarter, Live Better
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Slumber helps you track, analyze, and improve your sleep with powerful insights and an easy-to-use dashboard.
          </p>
          <SignInButton>
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              Get Started Free
            </button>
          </SignInButton>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/sleep-tracker.png"
            alt="SleepTracker Illustration"
            width={400}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Choose Slumber?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">📊 Smart Insights</h3>
            <p className="text-gray-600">
              Visualize your sleep patterns with easy-to-read graphs and data analytics.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">⏰ Routine Tracking</h3>
            <p className="text-gray-600">
              Track bedtime, wake-up time, and sleep duration to build healthy habits.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">🔒 Secure & Private</h3>
            <p className="text-gray-600">
              Your sleep data is safe with us — powered by Clerk authentication and PostgreSQL.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-md shadow">
            <p className="text-gray-700 mb-4">
              &quot;SleepTracker has completely transformed my sleep schedule. I feel more energized every day!&quot;
            </p>
            <p className="text-purple-500 font-bold">- Sarah L.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-md shadow">
            <p className="text-gray-700 mb-4">
              &quot;The insights from SleepTracker have helped me identify and fix my sleep issues. Highly recommend it!&quot;
            </p>
            <p className="text-purple-500 font-bold">- John D.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-md shadow">
            <p className="text-gray-700 mb-4">
              &quot;SleepTracker is so easy to use and provides accurate data. It&apos;s a must-have for anyone looking to improve their sleep!&quot;
            </p>
            <p className="text-purple-500 font-bold">- Emily R.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r bg-white text-center text-black">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Ready to Improve Your Sleep?
        </h2>
        <SignInButton>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
            Get Started Today
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Guest;
