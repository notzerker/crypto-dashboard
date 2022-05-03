import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full h-screen p-8">
        <Navbar />
        {children}
      </div>
    </>
  );
}
