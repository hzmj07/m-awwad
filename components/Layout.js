import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-white text-black ">
      <Header/>
      <main className="flex flex-col min-h-screen bg-white text-black overflow-visible">{children}</main>
      <Footer />
    </div>
  );
}   