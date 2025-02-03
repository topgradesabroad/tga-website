import { useState } from "react";

const PopupForm = ({ isOpen, closePopup }: { isOpen: boolean, closePopup: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <form>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          {/* Add more fields as needed */}
          <button type="submit" className="btn">Submit</button>
        </form>
        <button onClick={closePopup} className="mt-4 text-red-500">Close</button>
      </div>
    </div>
  );
};

export default PopupForm;
