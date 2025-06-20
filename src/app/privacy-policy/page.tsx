// pages/privacy-policy.tsx
import React from "react";
import Head from "next/head";
import "@/scss/sections/privacy.scss";
import BasicTopBanner from "@/components/BasicTopBanner";

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy - How we collect, use, and protect your personal information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BasicTopBanner
        title="Privacy Policy"
        bannerImgSrc="/images/privacy.jpg"
      />
      <div className="privacy-policy-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="privacy-content">
                <div className="text-center mb-5">
                  <h1 className="privacy-title">Privacy Policy</h1>
                  <p className="privacy-subtitle">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as
                    when you create an account, make a purchase, subscribe to
                    our newsletter, or contact us for support. This may include:
                  </p>
                  <ul>
                    <li>
                      Personal identification information (name, email address,
                      phone number)
                    </li>
                    <li>
                      Payment information (credit card details, billing address)
                    </li>
                    <li>
                      Profile information (preferences, interests, demographics)
                    </li>
                    <li>
                      Communication data (messages, feedback, survey responses)
                    </li>
                  </ul>
                </div>

                <div className="privacy-section">
                  <h2>2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>
                      Send you technical notices, updates, and support messages
                    </li>
                    <li>
                      Respond to your comments, questions, and customer service
                      requests
                    </li>
                    <li>
                      Communicate with you about products, services, and events
                    </li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>
                </div>

                <div className="privacy-section">
                  <h2>3. Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except in
                    the following circumstances:
                  </p>
                  <ul>
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>
                      With trusted service providers who assist in our
                      operations
                    </li>
                    <li>
                      In connection with a merger, acquisition, or sale of
                      assets
                    </li>
                  </ul>
                </div>

                <div className="privacy-section">
                  <h2>4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the internet is 100%
                    secure.
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>5. Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary
                    to fulfill the purposes outlined in this privacy policy,
                    unless a longer retention period is required or permitted by
                    law.
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>6. Your Rights</h2>
                  <p>
                    Depending on your location, you may have the following
                    rights:
                  </p>
                  <ul>
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Portability of your data</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </div>

                <div className="privacy-section">
                  <h2>7. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to collect
                    information about your browsing activities. You can control
                    cookies through your browser settings and other tools.
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>8. Third-Party Links</h2>
                  <p>
                    Our service may contain links to third-party websites. We
                    are not responsible for the privacy practices of these
                    external sites. We encourage you to review their privacy
                    policies.
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>9. Children's Privacy</h2>
                  <p>
                    Our service is not directed to children under 13. We do not
                    knowingly collect personal information from children under
                    13. If you become aware that a child has provided us with
                    personal information, please contact us.
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. We will
                    notify you of any changes by posting the new privacy policy
                    on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="privacy-section">
                  <h2>11. Contact Us</h2>
                  <p>
                    If you have any questions about this privacy policy or our
                    practices, please contact us at:
                  </p>
                  <div className="contact-info">
                    <p>
                      <strong>Email:</strong> privacy@yourcompany.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Privacy Street, Your City,
                      State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
