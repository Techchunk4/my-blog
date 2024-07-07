import Link from "next/link";
import { FaHome, FaInfoCircle, FaBlog, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen p-5 bg-gray-100 bg-opacity-75">
      <header className="flex items-center justify-between mb-8">
        <h1 className="flex items-center text-4xl font-bold">
          <FaHome className="mr-2" /> My Blog
        </h1>
        <nav className="space-x-4">
          <Link href="/" className="text-blue-500">
            Home
          </Link>
          <Link href="/about" className="text-blue-500">
            About
          </Link>
          <Link href="/posts" className="text-blue-500">
            Posts
          </Link>
          <Link href="/contact" className="text-blue-500">
            Contact
          </Link>
        </nav>
      </header>
      <main>
        <p className="mb-4">Welcome to my blog! This is the homepage.</p>

        <section className="flex flex-col items-center justify-center mt-10 text-center">
          <h3 className="mb-4 text-4xl font-thin tracking-widest text-white uppercase ">
            Introduction
          </h3>
          <p className="max-w-2xl mb-4 text-2xl text-gray-600">
            This is a sample blog application built with Next.js, TailwindCSS,
            and React Icons. Explore the different pages using the navigation
            links above. Each page is styled with TailwindCSS and includes
            sample content to demonstrate the layout and styling.
          </p>
          <h3 className="mb-2 text-3xl font-thin tracking-widest text-black uppercase">
            Features
          </h3>
          <ul className="max-w-2xl text-2xl text-left text-gray-600 list-disc list-inside de">
            <li>Responsive design with TailwindCSS</li>
            <li>Navigation using Next.js Link component</li>
            <li>Icon integration with React Icons</li>
            <li>Dockerized for easy deployment</li>
          </ul>
          <h4 className="mt-4 text-2xl tracking-widest text-white uppercase">
            Author
          </h4>
          <p className="text-4xl font-thin tracking-widest text-gray-900 uppercase">
            Abdelkader
          </p>
        </section>
      </main>
    </div>
  );
}
