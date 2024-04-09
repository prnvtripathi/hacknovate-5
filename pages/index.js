import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local'

const pricedown = localFont({
  src: './../assets/fonts/pricedown.ttf',
})

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
