import teakapLogo from "./assets/logo/teakapLogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex bg-yellow-200 px-32 py-5 items-start justify-between">
      <Image
        className="w-10 h-10"
        src={teakapLogo}
        alt="Teakap logo"
        priority
      />
    </div>
  );
};

export default Navbar;
