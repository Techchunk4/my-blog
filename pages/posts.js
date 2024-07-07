import Link from "next/link";
import { FaBlog, FaHome } from "react-icons/fa";

export default function Post() {
  return (
    <div className="min-h-screen p-5 bg-gray-100 bg-opacity-75">
      <h1 className="flex items-center mb-4 text-4xl font-bold">
        <FaBlog className="mr-2" /> Post
      </h1>
      <p>This is a sample post page.</p>
      <Link href="/" className="flex items-center text-blue-500">
        <FaHome className="mr-2" /> Go to Home
      </Link>
    </div>
  );
}
