import React, { useState } from "react";
import { Input, Button, message } from "antd";
// import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log(formData);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message_html: formData.message,
    };

    emailjs
      .send(
        "service_q84f3fo", // e.g. "service_g7zs9ad"
        "template_tgit4u6", // e.g. "template_6wz3x03" template_vu2be93
        templateParams,
        "BVDkdM1Dqe1AdxFrm" // e.g. "lVJmflgaWp1a1o3Cg"
      )
      .then(() => {
        message.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        message.error("Failed to send message.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Contact us using the Following Form
          </h2>
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block font-medium mb-1">Name *</label>
              <Input
                size="large"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address *</label>
              <Input
                size="large"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <Input
                size="large"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message *</label>
              <Input.TextArea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="bg-[#203B63] rounded font-semibold hover:!bg-yellow-400 hover:!text-black"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Demo;