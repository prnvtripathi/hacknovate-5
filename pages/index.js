import About from '@/components/About';
import CountdownTimer from '@/components/Countdown';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
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
        <Navbar />
        <Hero />
        <CountdownTimer />
        <About />
      </main>
    </>

  );
}
