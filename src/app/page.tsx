import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Blog from "@/Components/Blog";
import Contact from "@/Components/Contact";
import Follow from "@/Components/Follow";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <Blog/>
      <Contact/>
      <Follow/>
      <Footer/>
    </>
  );
}
