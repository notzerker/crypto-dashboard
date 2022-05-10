import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed top-0 h-[200vh] w-[200vw] translate-x-[-50vw] translate-y-[-100vh] bg-gradient-radial from-primary/10 to-transparent"></div>
      <div className="relative w-full h-screen flex flex-row z-50">
        <Navbar />
        {children}
      </div>
    </>
  );
}
