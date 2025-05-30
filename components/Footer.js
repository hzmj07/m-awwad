export default function Footer() {
  return (
    <footer className="w-full py-6  bg-gray-200 text-black text-center items-center justify-center text-sm">
      <div className="max-w-6xl mx-auto px-6 flex-row flex text-gray-700 items-center justify-center">
        &copy; {new Date().getFullYear()} Muhammed Awwad. All rights reserved.

        <div className="flex-row flex items-center justify-center ml-4" >
          Created By<a href="https://softhzm.org" target="_blank" rel="noopener noreferrer">
  <img
    src="https://i.imgur.com/zXe2TjW.png"
    alt="Logo"
    className="h-6 w-auto ml-3 cursor-pointer"
  />
</a>
        </div>

      </div>
    </footer>
  );
} 