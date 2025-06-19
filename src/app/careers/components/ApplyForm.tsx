"use client";

import { useState } from "react";
import { LucideArrowRight, Phone } from "lucide-react";
import { contactDetails, jobs } from "@/assets/static/data";

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle your API submission here
    console.log("Submitted Data:", form);
  };

  return (
    <section className="contact-layout3 mt-50" id="applyForm">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="contact-panel">
              <form
                onSubmit={handleSubmit}
                id="contactForm"
                className="contact__panel-form position-relative"
              >
                <div className="row mb-40">
                  <div className="col-sm-12 col-lg-5 col-lg-7">
                    <h4 className="contact__panel-title">Apply Now</h4>
                    <p className="contact__panel-desc">
                      Ready to take the next step in your career? Fill out the
                      form below to apply for a position at NF Forgings Pvt.
                      Ltd. We value your interest and look forward to learning
                      more about your qualifications.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-5 col-lg-5">
                    <div className="contact__panel-info">
                      <strong className="contact__panel-info-title">
                        We will get back to you within 24 hours, or call us
                        everyday, 09:00 AM - 12:00 PM
                      </strong>
                      <div className="contact__number d-flex align-items-center">
                        <a href={`tel:${contactDetails.phone}`}>
                          <span className="cilclePhoneIcon me-2">
                            <Phone size={20} />
                          </span>
                          {contactDetails.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Left Column */}
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Position Applied For</option>
                        {jobs.map((job, index) => (
                          <option key={index} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Additional Details!"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control "
                        placeholder="Resume"
                        name="Resume"
                        // value={form.res}
                        // onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center">
                    <button type="submit" className="btn btn__secondary mr-40">
                      <span className="mx-2">Submit Now</span>
                      <LucideArrowRight className="mx-2" size={16} />
                    </button>
                    <div className="form-group input-radio my-3">
                      <label className="label-radio">
                        I accept the privacy and terms.
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={form.acceptTerms}
                          onChange={handleChange}
                          required
                        />
                        <span className="radio-indicator"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
