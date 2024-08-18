import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://00tkjih5x1.execute-api.ap-south-1.amazonaws.com/default/getInTouchMail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    console.log(result);
  };

  return (
    <div
      id="contact"
      className="bg-black text-white p-8 rounded-lg mx-3 md:mx-[20%] my-10"
    >
      <h1 className="text-center mb-4 text-5xl md:text-7xl font-HNlight">
        Let's Have a Chat{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </h1>
      <p className="text-center mt-6 mb-8 font-HNlight text-[#787579] text-2xl md:text-4xl tracking-wide">
        Want to say hello?
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-wrap justify-center">
          {" "}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full md:w-2/5 p-3 m-3 rounded-md bg-[#1E1E1E] text-white border-none"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full md:w-2/5 p-3 m-3 rounded-md bg-[#1E1E1E] text-white border-none"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full md:w-2/5 p-3 m-3 rounded-md bg-[#1E1E1E] text-white border-none"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full md:w-2/5 p-3 m-3 rounded-md bg-[#1E1E1E] text-white border-none"
          />
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full md:w-5/6 p-3 rounded-md bg-[#1E1E1E] m-3 text-white border-none h-32 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="w-full md:w-5/6 mx-auto py-3 my-3 rounded-md bg-yellow-300 text-black font-semibold"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
