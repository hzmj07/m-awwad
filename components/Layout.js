import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="flex flex-col min-h-screen bg-gray-900 overflow-visible">{children}</main>
      <Footer />
    </div>
  );
}   