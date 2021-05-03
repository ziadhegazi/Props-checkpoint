import Profile from "./Profile/profile";
import logo from "./ZH style 2 WIP3pdf.jpg"
import './App.css';

function App() {
  const handleName = () => {
    alert(`Hello, Ziad Hegazi`);
  }
  return (
    <>
      <Profile 
      fullname={"Ziad Hegazi"} 
      bio={"I am fluent in English and an easy going person with great communication skills. I also am great with computers and technology and fixing problems. I self-teach myself some new skills frequently like new programming languages, and skills to use. Well motivated and self-disciplined driven by the motive of always improving myself constantly. "} 
      profession={"Full Stack Developer"}
      alertName={handleName}>
        <img src={logo} alt="Logo" className="logo"></img>
      </Profile>
      <div className="background"></div>
    </>
  );
}

export default App;
