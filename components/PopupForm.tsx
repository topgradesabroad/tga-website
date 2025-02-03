"use client";
import { FC } from "react";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: FC<PopupFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;  // Don't render the popup if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left Column: Image */}
        <div className="flex justify-center items-center">
          <img
            src="/study-abroad-image.jpg"  // Replace with the actual image path
            alt="Study Abroad"
            className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"  // Reduced height of image
          />
        </div>

        {/* Right Column: Form Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Ready to Take the First Step?
          </h2>
          <p className="mb-6 text-center text-gray-600">
            Fill in your details below to get personalized advice and take the first step toward studying abroad!
          </p>

          <form className="space-y-4">
            {/* Student Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Preferred Destination Field */}
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Preferred Destination</label>
              <input
                type="text"
                id="destination"
                placeholder="e.g., USA, UK, Australia"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Course Choice Field */}
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Choice</label>
              <input
                type="text"
                id="course"
                placeholder="e.g., Data Science, Business Management"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Intake Year Field */}
            <div>
              <label htmlFor="intake" className="block text-sm font-medium text-gray-700">Intake Year</label>
              <input
                type="text"
                id="intake"
                placeholder="e.g., 2025, 2026"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Level of Education Field */}
            <div>
              <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">Level of Education</label>
              <input
                type="text"
                id="educationLevel"
                placeholder="e.g., Bachelor's, Master's"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md mt-6 hover:bg-gray-900 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;



