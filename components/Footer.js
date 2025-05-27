export default function Footer() {
  return (
    <footer className="w-full py-6   bg-gray-800 text-white text-center text-sm">
      <div className="max-w-6xl mx-auto px-6">
        &copy; {new Date().getFullYear()} Street Photography Portfolio. All rights reserved.
      </div>
    </footer>
  );
} 