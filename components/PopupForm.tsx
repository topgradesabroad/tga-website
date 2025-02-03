"use client";
import { useState } from "react";
import { FC } from "react";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;  // Don't render the popup if it's not open

  const nextStep = () => {
    const form = document.getElementById("popupForm") as HTMLFormElement;
    if (form.checkValidity()) {
      setStep(step + 1);
    } else {
      form.reportValidity();
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full h-auto md:h-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Image Column */}
        <div className="col-span-1 flex items-center justify-center">
          <img src="study-abroad-image.jpg" alt="Description" className="w-full h-auto max-h-[70vh] object-cover rounded-lg" />
        </div>
        
        {/* Form Content Column */}
        <div className="col-span-1 flex flex-col items-center justify-center h-full overflow-auto">
          {!submitted ? (
            <form id="popupForm" className="w-full space-y-4" onSubmit={handleSubmit}>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-black leading-tight" style={{ fontFamily: 'DM Sans' }}>Your Future Starts Here! Get Personalized Guidance for Studying Abroad</h2>
                <p className="mt-3 text-gray-600" style={{ fontFamily: 'Poppins' }}>Fill out the form below and get a customized plan, including university options and scholarship advice.</p>
              </div>
              {step === 1 && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input type="tel" id="mobile" required pattern="^\d{10}$" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    <span className="text-red-500 text-sm hidden" id="mobileError">Please enter a valid 10-digit phone number.</span>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    <span className="text-red-500 text-sm hidden" id="emailError">Please enter a valid email address.</span>
                  </div>
                  <div>
                    <button type="button" onClick={nextStep} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country Preference</label>
                    <input type="text" id="country" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course Preference</label>
                    <input type="text" id="course" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education Level</label>
                    <input type="text" id="education" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-md">Back</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                  </div>
                </>
              )}
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700">Thank You!</h2>
              <p className="text-gray-600">We have received your details and one of our counselors will contact you within 24 hours.</p>
              <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;