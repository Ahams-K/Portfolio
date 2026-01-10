import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Thoughts from './components/Thoughts';
import Contact from './components/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 pt-24"> {/* pt-24 to offset navbar */}
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Thoughts />
                <Contact />
            </main>
        </>
    );
}
