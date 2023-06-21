import Image from "next/image";
import forest from "../public/forest.png";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className="z-30 top-0 sticky flex justify-between items-center w-screen h-24 bg-black">
      <div
        onClick={goToHome}
        className=" select-none cursor-pointer flex mx-5 xl:mx-8 items-center hover:scale-105"
      >
        <Image
          className="w-10 h-10 xl:w-14 xl:h-14"
          alt="forest_img"
          src={forest}
        ></Image>
        <h1 className=" mx-3 xl:mx-5 font-semibold text-2xl xl:text-5xl font-Orbitron text-white">
          FireWatch
        </h1>
      </div>
    </div>
  );
}
