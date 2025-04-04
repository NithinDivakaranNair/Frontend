import React from "react";

const ConfirmationModal = ({ onOk }) => {
  return (
    <div className="bg-white p-8 rounded shadow-lg max-w-sm  flex  flex-col justify-around items-center">
      <img src="/Heart (1).svg" alt=""  className=""/>
      <h2 className="text-xl font-bold mb-4">Thank you for connect with us.</h2>
      <p className="mb-6 text-sm">Your team will contacting with you soon.</p>
      <button
        onClick={onOk}
        className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600"
      >
        Done
      </button>
    </div>
  );
};

export default ConfirmationModal;
