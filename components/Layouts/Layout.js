import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="fixed top-0 h-[200vh] w-[200vw] translate-x-[-50vw] translate-y-[-100vh] bg-gradient-radial from-[#e4a763]/10 to-transparent"></div>
      <div className="relative w-full min-h-screen flex flex-col">
        <Navbar className="" />
        <div className="px-36">{children}</div>
      </div>
    </>
  );
}
