import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Options from './components/Options'
import Artgallary from './artgallary/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Options />
        <Contact />
        <Artgallary />
      </main>
    </div>
  )
}

