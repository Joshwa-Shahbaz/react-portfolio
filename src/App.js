import  {NavBar}  from "./component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Banner } from "./component/Banner";
import { Skills } from "./component/Skills";
import { Contact } from "./component/Contact";
import { Project } from "./component/Project";
import { Footer } from "./component/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
