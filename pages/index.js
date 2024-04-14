import About from '@/components/About';
import Banner from '@/components/Banner';
import CommPartners from '@/components/CommPartners';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Prizes from '@/components/Prize';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Themes from '@/components/Themes';
import localFont from 'next/font/local'
import Head from 'next/head';

const pricedown = localFont({
  src: './../assets/fonts/pricedown.ttf',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacknovate 5</title>
        <meta name="description" content="Hacknovate 5 - Code like a pro, Hack like a heist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Prizes />
        <Themes />
        <Schedule />
        <Sponsors />
        <CommPartners />
        <FAQs />
        <Banner />
      </main>
    </>

  );
}
