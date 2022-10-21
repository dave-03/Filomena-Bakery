import './App.css';
import AboutUs from './Components/AboutUs';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div >
      <header>
        <nav className=" d-flex justify-content-around mt-2"  > 
        <Navbar></Navbar>
        </nav>
        <br></br>
        <main>
          <Hero></Hero>
        </main>
        <section>
          <AboutUs></AboutUs>
        </section>
       
      </header>
    </div>
  );
}

export default App;
