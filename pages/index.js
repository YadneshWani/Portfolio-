import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Info from '../components/info'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'

export default function Home() {
  return (
    <div>
      <main className='main'>
      <Header/>
      <Info/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </main>
    </div>
  )
}

