import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        hideProgressBar
        theme="light"
      />
    </>
  );
}
