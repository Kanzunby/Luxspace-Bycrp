import Header from "../parts/Header";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Hero from "../parts/HomePage/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import Documents from "../parts/Documents";

export default function HomePage() {
  return (
    <Documents>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
      <a href="https://www.youtube.com/">youtube</a>
    </Documents>
  );
}
