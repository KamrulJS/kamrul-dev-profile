
import ContactThumb from "../../assets/images/contact/contact-thumb.png";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
	import React, { useState } from "react";
import { Input, Button, message } from "antd";
// import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';



function ContactForm() {


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
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title">
							<h2>
								<span className="aximo-title-animation">
									Contact us for a
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="Star" />
									</span>
								</span>
								personal experience
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-contact-thumb ">
							<img src={ContactThumb} alt="Contact Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-main-form">
							<form onSubmit={sendEmail}>
								<div className="aximo-main-field">
									<Field label="Your Name" className="block font-medium mb-1" >
										<Input
														size="large"
														name="name"
														value={formData.name}
														onChange={handleChange}
														placeholder="Enter your name"
														required
										/>
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter email address" className="block font-medium mb-1" >
										<Input
														size="large"
														type="email"
														name="email"
														value={formData.email}
														onChange={handleChange}
														placeholder="Enter your email"
														required
													  />
									</Field>
								</div>
								<div className="aximo-main-field">
									<Field label="Enter Phone Number" className="block font-medium mb-1">
										<Input
														size="large"
														type="tel"
														name="phone"
														value={formData.phone}
														onChange={handleChange}
														placeholder="Enter your phone"
													  />
									</Field>
								</div>
								<div className="aximo-main-field">
									<label className="block font-medium mb-1">
										<Input.TextArea
														rows={4}
														name="message"
														value={formData.message}
														onChange={handleChange}
														placeholder="Enter your message"
														required
										/>
									</label>
								</div>
								<button id="aximo-main-btn" type="submit">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
