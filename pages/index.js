import Head from 'next/head';
import Navbar from '../components/Navbar.js';

export default function Home() {
  return (
    <div>
      <Head>Andrew Weisbeck Dev Home</Head>

      <Navbar />
      <main>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">We turn your ideas into websites and apps that make money</h1>
              <p className="mb-5">
                Schedule your free consultation with Tar Heel Dev Studio to discover the digital needs of your business. 
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
