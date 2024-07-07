import Link from "next/link";
import { FaEnvelope, FaHome } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen p-5 bg-gray-100 bg-opacity-75">
      <h1 className="flex items-center mb-4 text-4xl font-bold">
        <FaEnvelope className="mr-2" /> Contact
      </h1>
      <p>This is the contact page. Feel free to reach out!</p>
      <Link href="/" className="flex items-center text-blue-500">
        <FaHome className="mr-2" /> Go to Home
      </Link>
    </div>
  );
}
