import assets from './assets/assets';

// Components
import AboutMe from './components/sections/AboutMe';
import TypedText from './components/reusable/TypedText';
import HamBurger from './components/reusable/HamBurger';

// UI icons (from lucide-react)
import { ChevronRight, ExternalLink } from "lucide-react";

// Social media icons (from react-icons/fa)
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, } from "react-icons/fa";

// Next.js
import Image from 'next/image';
import Link from 'next/link';
import Clients from './components/sections/Clients';
import Skills from './components/sections/Skills';

const Home = () => {
  return (
    <main className='w-full gap-8 flex relative min-h-screen text-white'>
      <HamBurger />
      <div className='w-full'>
        {/* Hero */}
        <section className="py-20 md:py-30 lg:h-screen px-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            data-aos='fade-right'
            className='flex relative flex-col justify-center gap-4'>
            <div className='absolute bottom-15 left-10 rounded-full bg-[var(--accent)] w-50 h-50 -z-1' />
            <div className='flex text-xl justify-center lg:justify-start items-center gap-2'>
              I am <span className='font-bold text-[var(--primary-color)] text-2xl'>Nouman Tariq</span>
            </div>
            <h1 className='flex justify-center lg:justify-start items-center text-4xl md:text-6xl font-bold flex-col gap-4 md:flex-row text-center md:text-left '>
              Coding Ideas Into Reality
            </h1>
            <h2 className='flex text-xl md:text-2xl justify-center lg:justify-start w-full font-light mt-4'>Experties in   <span className='underline ml-2 underline-offset-8 font-semibold'>
              <TypedText strings={["React.js", "MongoDB", "HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "TailwindCSS"]} />
            </span></h2>
            <div className='flex justify-center lg:justify-start  mt-8 items-center gap-4'>
              <button className='text-white flex items-center gap-2'>
                Hire Me <ChevronRight />
              </button>
              <button className='bg-white btn-secondary text-[var(--primary-color)] hover:text-white flex items-center gap-2'>
                View Projects <ChevronRight />
              </button>
            </div>
            <div className='flex items-center justify-center lg:justify-start flex-wrap mt-2 gap-4'>
              <div
                data-aos='fade-up'
                data-aos-delay='100'
                className='rounded-full p-4 bg-gradient-to-br from-[var(--accent)] to-gray800 shadow-lg hover:translate-y-[-5px] transition-all cursor-pointer text-white font-bold'>
                <FaYoutube size={20} />
              </div>
              <div
                data-aos-delay='200'
                data-aos='fade-up'
                className='rounded-full p-4 bg-gradient-to-br from-[var(--accent)] to-gray800 shadow-lg hover:translate-y-[-5px] transition-all cursor-pointer text-white font-bold'>
                <FaLinkedin size={20} />
              </div>
              <div
                data-aos-delay='300'
                data-aos='fade-up'
                className='rounded-full p-4 bg-gradient-to-br from-[var(--accent)] to-gray800 shadow-lg hover:translate-y-[-5px] transition-all cursor-pointer text-white font-bold'>
                <FaTiktok size={20} />
              </div>
              <div
                data-aos-delay='400'
                data-aos='fade-up'
                className='rounded-full p-4 bg-gradient-to-br from-[var(--accent)] to-gray800 shadow-lg hover:translate-y-[-5px] transition-all cursor-pointer text-white font-bold'>
                <FaInstagram size={20} />
              </div>
            </div>
          </div>
          <div
            data-aos='fade-left'
            className={`relative hidden flex-col justify-center items-center gap-6 lg:flex`}>
            <div className='absolute w-60 h-60 top-20 -z-1 left-50 bg-[var(--accent)] rounded-full' />
            <div className='w-100 h-100 rounded-3xl before:absolute before:w-100 before:h-100 before:top-2 before:-z-1 before:left-2  before:bg-[var(--accent)] before:rounded-4xl relative'>
              {/* Overlay */}
              <Link href='https://www.fiverr.com/' target='_blank' className="absolute top-0 left-0 w-full h-full bg-[#4a4a4a57] hover:bg-[#2e2e2e57] group rounded-4xl transition-colors overflow-hidden cursor-pointer">
                {/* Image */}
                <ExternalLink className='absolute top-1/2 left-1/2 -translate-1/2 hidden text-white group-hover:block z-10' />
                <Image
                  src={assets.hero_right}
                  alt="Hero"
                  width={1200}
                  height={600}
                  priority
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.1] rounded-3xl group-hover:blur-[2px]"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className='mt-10 sm:mt-12 md:mt-14 lg:mt-16'>
          <AboutMe />
        </section>

        {/* Clients */}
        <section className='mt-10 sm:mt-12 md:mt-14 lg:mt-16'>
          <Clients />
        </section>

        {/* Skills */}
        <section className='mt-10 mb-50 sm:mt-12 md:mt-14 lg:mt-16'>
          <Skills />
        </section>
      </div>
    </main>
  )
}

export default Home
