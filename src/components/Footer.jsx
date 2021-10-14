import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#fffff4" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-laptop-code" /> <i className="fas fa-clone" />   by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/a-e-e-collier"
          aria-label="My GitHub"
        >
          Adam E. E. Collier
        </a>{" "}
        using <i className="fab fa-react" /> & <i className="fab fa-github-alt" /> 
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
