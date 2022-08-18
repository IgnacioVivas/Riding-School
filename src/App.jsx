import "./App.css";
import NavBar from "./components/navBar/NavBar";
import AbaoutUs from "./components/abaoutUs/AbaoutUs";
import SectionParallax from "./components/sectionParallax/SectionParallax";
import OurStuff from "./components/ourStuff/OurStuff";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageAbaoutUs from "./components/pageAbaoutUs/PageAbaoutUs";
import PageGallerey from "./components/pageGallery/PageGallerey";
import PageLessons from "./components/pageLessons/PageLessons";
import PageContact from "./components/pageContact/PageContact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path={`/`}>
            <AbaoutUs></AbaoutUs>
            <SectionParallax></SectionParallax>
            <OurStuff></OurStuff>
          </Route>
          <Route exact path={`/about`}>
            <PageAbaoutUs></PageAbaoutUs>
          </Route>
          <Route exact path={`/gallery`}>
            <PageGallerey></PageGallerey>
          </Route>
          <Route exact path={`/lessons`}>
            <PageLessons></PageLessons>
          </Route>
          <Route exact path={`/contact`}>
            <PageContact></PageContact>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
