// App.jsx
import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import FormModal from "./components/FormModal";
import ConfirmationModal from "./components/ConfirmationModal";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setSubmittedData((prev) => [...prev, data]);
    setShowForm(false);
    setShowConfirmation(true);
  };

  const handleConfirmOk = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="relative min-h-screen">

      <div className={showForm || showConfirmation ? "filter blur-sm transition" : "transition"}>
        <LandingPage onGetStarted={handleGetStarted} submittedData={submittedData} />
      </div>

      {showForm && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <FormModal onSubmit={handleFormSubmit} />
        </div>
      )}
      
      {showConfirmation && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <ConfirmationModal onOk={handleConfirmOk} />
        </div>
      )}
    </div>
  );
};

export default App;