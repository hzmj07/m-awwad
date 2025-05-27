export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-white text-center">İLETİŞİM</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">İsim</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-black font-light px-8 py-4 text-lg tracking-wide hover:bg-gray-100 transition duration-300"
          >
            GÖNDER
          </button>
        </form>
      </div>
    </div>
  );
} 