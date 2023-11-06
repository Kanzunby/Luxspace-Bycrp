import Documents from "../parts/Documents";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import PageError from "../parts/PageError";
import Sitemap from "../parts/Sitemap";

export default function NotFound() {
  return (
    <Documents>
      <Header />
      <PageError />
      <Sitemap />
      <Footer />
    </Documents>
  );
}
