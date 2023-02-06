import Head from 'next/head';
import Navbar from '../components/Navbar.js';

export default function Home() {
  return (
    <div>
      <Head>
        Andrew Weisbeck Dev Home
      </Head>
      <Navbar />
      <h1>
        Is there anybody out there?
      </h1>
    </div>
  );
}
