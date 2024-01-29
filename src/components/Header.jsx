import logoImg from "../assets/quiz-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="Quiz Logo" />
      <h1>Fancy React Quiz</h1>
    </header>
  );
}

export default Header;
