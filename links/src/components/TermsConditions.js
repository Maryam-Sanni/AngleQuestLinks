import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function App() {
  const navigate = useNavigate(); // useNavigate for web routing

  const navigateToPrivacyPolicy = () => {
    navigate("/privacy-policy"); // Navigate to Privacy Policy route
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Terms of Service</h1>
        <div className="content">
          <p>
            Welcome to AngleQuest. These Terms of Service outline the rules
            and regulations for the use of our website and services.
            <br />
            <br />
            By clicking "ACCEPT THE TERMS", we assume you accept these terms and
            conditions. Do not continue to use AngleQuest if you do not agree
            to all of the terms and conditions stated on this page.
            <br />
            <br />
            <strong>1. Intellectual Property Rights</strong>
            <br />
            Unless otherwise stated, AngleQuest and/or its licensors own the
            intellectual property rights for all material on our website. All
            intellectual property rights are reserved.
            <br />
            <br />
            <strong>2. Description of Service</strong>
            <br />
            AngleQuest is a platform that connects job seekers with experts
            and recruiters to streamline the hiring process. We assess skills
            and qualifications to provide a more objective evaluation of
            candidates.
            <br />
            <br />
            <strong>3. User Accounts</strong>
            <br />
            You may need to create an account to access certain features of our
            website. You are responsible for maintaining the confidentiality of
            your account credentials and for all activities that occur under
            your account.
            <br />
            <br />
            <strong>4. User Responsibilities</strong>
            <br />
            You agree to use AngleQuest only for lawful purposes and in
            accordance with these Terms. You are solely responsible for your
            interactions with other users and for any content you post or upload
            to the website.
            <br />
            <br />
            <strong>5. User License</strong>
            <br />
            You may view, download for caching purposes only, and print pages
            from our website for your own personal use, subject to the
            restrictions set out below and elsewhere in these terms and
            conditions.
            <br />
            You must not:
            <br />
            - Republish material from our website
            <br />
            - Sell, rent, or sub-license material from our website
            <br />
            - Reproduce, duplicate, or copy material from our website
            <br />
            - Redistribute content from our website
            <br />
            <br />
            <strong>6. User Content</strong>
            <br />
            Our website allows users to post, link, store, share, and otherwise
            make available certain information, text, graphics, videos, or other
            material. You are responsible for the content you post on our
            website and must ensure that it does not violate any laws or
            infringe on the rights of others.
            <br />
            <br />
            <strong>7. Privacy</strong>
            <br />
            Your privacy is important to us. Please review our{" "}
            <button className="link-button" onClick={navigateToPrivacyPolicy}>
              Privacy Policy
            </button>{" "}
            to understand how we collect, use, and disclose information about
            you when you use AngleQuest.
            <br />
            <br />
            <strong>8. Disclaimer of Warranties</strong>
            <br />
            AngleQuest is provided on an "as is" and "as available" basis,
            without any warranties of any kind, either express or implied. We do
            not warrant that our website will be uninterrupted or error-free.
            <br />
            <br />
            <strong>9. Limitation of Liability</strong>
            <br />
            In no event shall AngleQuest, nor any of its officers, directors,
            and employees, be liable to you for anything arising out of or in
            any way connected with your use of our website, whether such
            liability is under contract, tort, or otherwise.
            <br />
            <br />
            <strong>10. Governing Law</strong>
            <br />
            These terms and conditions are governed by and construed in
            accordance with the laws applicable in your country of residence,
            without regard to its conflict of law provisions. You agree that any
            legal action or proceeding between AngleQuest and you for any
            purpose concerning these terms or the website shall be brought
            exclusively in a court of competent jurisdiction in your country of
            residence.
            <br />
            <br />
            <strong>11. Indemnification</strong>
            <br />
            You agree to indemnify and hold harmless AngleQuest and its
            affiliates, officers, directors, employees, and agents from and
            against any claims, liabilities, damages, losses, and expenses,
            including reasonable attorneys' fees, arising out of or in
            connection with your use of AngleQuest.
            <br />
            <br />
            <strong>12. Changes to Terms</strong>
            <br />
            We reserve the right to revise these terms of service at any time
            without notice. By using this website, you agree to be bound by the
            current version of these terms of service.
            <br />
            <br />
            <strong>13. Contact Us</strong>
            <br />
            If you have any questions or concerns about these Terms, please
            contact us via email at{" "}
            <a href="mailto:AngleQuest@gmail.com" className="email-link">
              AngleQuest@gmail.com
            </a>{" "}
            or by filling out the contact form on our website{" "}
            <a href="#contact" className="contact-link">
              here
            </a>
            .
            <br />
            <br />
            By using our website, you agree to abide by these Terms of Service.
          </p>
          <div className="button-container">
            <button className="accept-button">Accept the Terms</button>
            <button className="decline-button">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
