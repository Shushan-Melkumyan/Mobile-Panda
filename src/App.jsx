import "./App.css";
import { Footer } from "./footer";
import { Header, MobileHeader } from "./header/Header";
import { Main } from "./main";
import { OurPrice } from "./ourPrice";
import { OurProjects } from "./ourProjects";
import { OurReviews } from "./ourReviews";
import { Questions } from "./questions";
import { StepsDev, MobileStepsDev } from "./stepsDev";
import { WeOnTelegram } from "./telegram";
import { TrustUsComponent } from "./trustUsComponent";
import { VideoConferences } from "./videoConferences";

function App() {
  const mobile = window.innerWidth < 810;

  return (
    <div className="App">
      {!mobile ? <Header /> : <MobileHeader />}
      <Main />
      <OurProjects id="mainProjectContainer" />
      <TrustUsComponent />
      <VideoConferences />
      {!mobile ? <StepsDev id="flexContainer" /> : <MobileStepsDev />}
      <WeOnTelegram />
      <OurPrice id="yourApp" />
      <OurReviews id="reviews" />
      <Questions id="questionContainer" />
      <Footer />
    </div>
  );
}

export default App;
