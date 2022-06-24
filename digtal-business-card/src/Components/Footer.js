import linkedin from "../linkedin.png";
import github from "../GitHub.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="">
        <img src={linkedin} alt="Linkedin Logo" />
      </a>
      <a href="">
        <img src={github} alt="Github Logo" />
      </a>
    </div>
  );
}
