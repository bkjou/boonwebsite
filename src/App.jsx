import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import InboxSection from "./components/InboxSection.jsx";
import Numbers from "./components/Numbers.jsx";
import UseCases from "./components/UseCases.jsx";
import Results from "./components/Results.jsx";
import Security from "./components/Security.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <InboxSection />
        <Numbers />
        <UseCases />
        <Results />
        <Security />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
