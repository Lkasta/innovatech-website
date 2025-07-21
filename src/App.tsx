import Hero from "./components/Hero";
import BannerServices from "./components/BannerServices";
import Experience from "./components/Experience";
import AboutDivision from "./components/AboutDivision";
import About from "./components/About";
import Footer from "./components/Footer";
// import BrasilBanner from "./components/BrasilBanner";

function App() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />
      <BannerServices />
      <About />
      <AboutDivision />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
