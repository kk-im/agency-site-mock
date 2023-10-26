import "./App.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Articles from "./sections/Articles";
import Company from "./sections/Company";
import Images from "./sections/Images";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="relative font-drafting">
      <Nav />
      <section className="l:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="l:padding-1 wide:padding-r padding-b padding-x">
        <About />
      </section>
      <section className="l:padding-1 wide:padding-r padding-x bg-stone-200">
        <Projects />
      </section>
      <section className="l:padding-1 wide:padding-r padding-x ">
        <Articles />
      </section>
      <section className="l:padding-1 wide:padding-r padding-x py-10 bg-stone-900">
        <Company />
      </section>
      {/* Image Grid */}
      <section className="l:padding-1 wide:padding-r pb-20 bg-stone-900">
        <Images />
      </section>
      <section className="l:padding-1 wide:padding-r padding-x py-10 bg-stone-900 border-t-1 border-white">
        <Footer />
      </section>
    </main>
  );
}

export default App;
