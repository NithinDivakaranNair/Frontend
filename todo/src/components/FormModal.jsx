import React, { useState } from "react";

const FormModal = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    email: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "languages") {
      setFormData((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value),
      }));
    } else if (type === "checkbox" && name === "termsAccepted") {
      setFormData((prev) => ({ ...prev, termsAccepted: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (formData.languages.length === 0) newErrors.languages = "Select at least one language.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Get Started Today!</h2>
      <p className="text-gray-600 mb-4">
        Fill in your details and take control of your tasks.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full p-2 border rounded bg-red-100"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          <div className="w-1/2">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full p-2 border rounded bg-red-100"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block font-semibold">Gender</label>
          <div className="flex gap-4">
            {["male", "female"].map((g) => (
              <label
                key={g}
                className="flex items-center gap-2 bg-red-100 p-2 rounded"
              >
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        <div>
          <label className="block font-semibold">Languages</label>
          <div className="flex flex-col gap-2">
            {["English", "Hindi", "Marathi"].map((lang) => (
              <label
                key={lang}
                className="flex items-center gap-2 bg-red-100 p-2 rounded"
              >
                <input
                  type="checkbox"
                  name="languages"
                  value={lang.toLowerCase()}
                  checked={formData.languages.includes(lang.toLowerCase())}
                  onChange={handleChange}
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full p-2 border rounded bg-red-100"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label className="text-sm">
            I agree to the{" "}
            <span className="text-red-500 underline">terms and conditions</span>
          </label>
        </div>
        {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default FormModal;
