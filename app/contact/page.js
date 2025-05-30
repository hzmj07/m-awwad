export default function Contact() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-32 pb-20 px-6">
      {/* Light background image and white overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/PVj0PKI.jpeg"
          alt="Street Photography"
          className="w-full h-full object-cover object-center bg-white opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-light mb-8 text-black text-center">CONTACT</h1>
        <p className="text-lg md:text-xl text-gray-800 mb-10 text-start font-light">
          You can use my social media accounts to get in touch with me or collaborate.<br />
          For any questions and feedback, you can send me a message on Instagram.
        </p>
        <div className="flex flex-row gap-6 justify-center">
          <a
            href="https://www.instagram.com/capturedbymuhammed/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-lg font-light hover:bg-gray-900 transition"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="white"/>
              <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6.3-8.1a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM21 7.5c-.024-1.326-.217-2.23-.465-2.995a4.5 4.5 0 0 0-2.54-2.54C17.23 1.717 16.326 1.524 15 1.5 13.674 1.476 13.326 1.476 12 1.5c-1.326.024-2.23.217-2.995.465a4.5 4.5 0 0 0-2.54 2.54C1.717 6.77 1.524 7.674 1.5 9c-.024 1.326-.024 1.674 0 3 .024 1.326.217 2.23.465 2.995a4.5 4.5 0 0 0 2.54 2.54c.765.248 1.669.441 2.995.465 1.326.024 1.674.024 3 0 1.326-.024 2.23-.217 2.995-.465a4.5 4.5 0 0 0 2.54-2.54c.248-.765.441-1.669.465-2.995.024-1.326.024-1.674 0-3ZM12 17.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5Zm6.75-8.25a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z" fill="#000"/>
            </svg>
            Instagram
          </a>
          <a
            href="mailto:awwadmuhammet54@gmail.com"
            className="inline-flex items-center gap-2 border border-black text-black px-6 py-3 rounded-lg text-lg font-light hover:bg-black hover:text-white transition"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="white"/>
              <path d="M4 8l8 5 8-5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="8" width="16" height="8" rx="2" stroke="#000" strokeWidth="1.5"/>
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}