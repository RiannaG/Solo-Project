import photo from "../foto-profilo.png";

export default function Header() {
  return (
    <div>
      <div className="photo-container">
        <img src={photo} />
      </div>
      <div className="user-name">
        <h1>Giuseppe Rianna</h1>
        <h2>Junior Full Stack Developer</h2>
        <h3>riannagiuseppe.f@gmail.com</h3>
      </div>
    </div>
  );
}
