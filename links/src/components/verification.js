import React from "react";

const EmailVerificationSuccess = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Email Verified Successfully!</h1>
      <p style={styles.message}>
        Thank you for verifying your email address. Your account is now active.
      </p>
      <a
        href="https://www.anglequest.com"
        style={styles.homeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Back to Sign in
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    padding: "20px",
  },
  header: {
    fontSize: "2rem",
    color: "#4caf50",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
  },
  homeLink: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "coral",
    textDecoration: "none",
  },
};

export default EmailVerificationSuccess;
