import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Rates } from "./views/Rates";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { FreeLessons } from "./views/FreeLessons";
import { Philosophy } from "./views/Philosophy";
import { Testimonials } from "./views/Testimonials";
import { Tabs } from "./components/Tabs";

function App() {
  const page = {
    tabs: [
      "Home",
      "About",
      "Free Lessons",
      "Teaching Philosophy",
      "Rates & Policies",
      "Student Testimonials",
      "Contact",
    ],

    content: [
      <Home />,
      <About />,
      <FreeLessons />,
      <Philosophy />,
      <Rates />,
      <Testimonials />,
      <Contact />,
    ],
  };
  return (
    <div id="main-container">
      <img
        src="./newwebhead.jpg"
        alt="The Lord Of The Strings-Guitar and Music Theory Lessons-All Levels & Styles-Acoustic or electric"
        id="image-header"
      ></img>
      <Tabs page={page} />
    </div>
    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/rates" element={<Rates />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
