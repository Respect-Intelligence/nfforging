"use client";
import { useToastActions } from "@/hooks/useToastActions";
import React from "react";
import { useState } from "react";

function ContactForm() {
  const { showSuccess, showError, showWarning, showInfo } = useToastActions();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
    privecyChecked: "",
  });
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
    privecyChecked: false,
  });
  const onchengeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    if (type == "checkbox" && target instanceof HTMLInputElement) {
      setFormdata((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = (data: any) => {
    const newErrors: any = {};
    if (!data.name.trim()) newErrors.name = "Name is required.";

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!data.industry) newErrors.industry = "Please select an industry.";

    if (!data.privecyChecked)
      newErrors.privecyChecked = "Please accept privacy and terms";

    // if (!data.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };
  const inputFocusOut = async (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let { name, value } = e.target;
    const formErrors = validateForm(formdata);
    setErrors((prev) => ({ ...prev, [name]: formErrors[name] }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      if (formErrors.privecyChecked) {
        showError(formErrors.privecyChecked);
      }
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showSuccess("Message sent successfully!");
        form.reset();
      } else {
        showError("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      showError("Something went wrong.");
    }
  };
  return (
    <>
      <form
        id="contactForm"
        className="contact__panel-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name*"
                id="name"
                name="name"
                required
                aria-required="true"
                onBlur={inputFocusOut}
                onChange={onchengeHandler}
                value={formdata?.name}
              />
              {errors.name && (
                <small className="text-danger err-msg">{errors.name}</small>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
                id="email"
                name="email"
                required
                aria-required="true"
                onBlur={inputFocusOut}
                onChange={onchengeHandler}
                value={formdata?.email}
              />
              {errors.email && (
                <small className="text-danger err-msg">{errors.email}</small>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone*"
                id="phone"
                name="phone"
                required
                aria-required="true"
                onBlur={inputFocusOut}
                onChange={onchengeHandler}
                value={formdata?.phone}
              />
              {errors.phone && (
                <small className="text-danger err-msg">{errors.phone}</small>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="form-group">
              <select
                className="form-control form-select"
                required
                // defaultValue={"null"}
                name="industry"
                onBlur={inputFocusOut}
                onChange={onchengeHandler}
                defaultValue={formdata?.industry}
              >
                <option value="" disabled hidden>
                  select your industry*
                </option>

                <option>Petroleum &amp; Gas Energy</option>
                <option>Construction &amp; Engineering</option>
                <option>Mechanical Engineering</option>
              </select>
              {errors.industry && (
                <small className="text-danger err-msg">{errors.industry}</small>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Additional Details!"
                id="contact-messgae"
                name="message"
                required
                aria-required="true"
                onBlur={inputFocusOut}
                onChange={onchengeHandler}
                value={formdata?.message}
              ></textarea>
              {errors.message && (
                <small className="text-danger err-msg">{errors.message}</small>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap align-items-center">
            <button type="submit" className="btn btn__primary mr-40">
              <span className="mx-2">Submit Request</span>
              <i className="icon-arrow-right mx-2"></i>
            </button>
            <div className="form-group input-radio my-3">
              <label className="label-radio color-para ">
                I accept the privacy and terms.
                <input
                  type="checkbox"
                  name="privecyChecked"
                  onBlur={inputFocusOut}
                  onChange={onchengeHandler}
                  defaultChecked={formdata?.privecyChecked}
                />
                <span className="radio-indicator"></span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
