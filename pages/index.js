import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Selam Beyene Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1>Selam&apos;s Portfolio</h1>
      </header>

      {/* About Me Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <Image
              src="/headshot.png"
              alt="My Headshot"
              width={200}
              height={200}
            />
          </div>
          <div className="col-md-6">
            <h2>About Me:</h2>
            <p>
              I’m a methodically-minded software engineer and options trader, with an aptitude for efficient processes and function. My experiences prior to entering the software engineering field have helped me enhance my skills in detail-oriented work, process development, and rapid learning in fast-paced environments. My goal as a software engineer is to leverage my experiences alongside my technical expertise to support a team with a shared commitment to fostering positive community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-light container py-5">
        <h2>Projects:</h2>
        {/* Add your project content here */}
      </section>

      {/* Contact Me Section */}
      <section className="bg-secondary text-white text-center py-5">
        <h2>Contact Me:</h2>
        {/* Add your contact form or information here */}
      </section>
    </>
  );
}
