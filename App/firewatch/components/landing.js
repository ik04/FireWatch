import Image from "next/image";
import fire from "../public/wildfiregif.gif";
import { useRouter } from "next/router";
export default function Landing() {
  const router = useRouter();
  const goToWildFire = () => {
    router.push("/wildfire");
  };
  return (
    <div className="pt-16 w-full relative">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="text-white mx-2 z-20 w-full xl:mx-10 xl:text-7xl text-2xl font-semibold font-Lato">
              {" "}
              Welcome to FireWatch!
            </h1>
            <h2 className="text-white mx-2 mt-4 z-20 xl:mx-10 xl:mt-8  xl:w-[900px] xl:text-5xl text-xl font-Lato ">
              We use the latest advancements in Artificial Intelligence and
              Machine Learning to detect forest fires using satellite imaging.
              <br /> Our cutting-edge technology allows us to monitor vast areas
              of forests and quickly identify any signs of fire, providing early
              warning and helping to prevent the spread of wildfires.
            </h2>
          </div>
          <div className="image">
            <Image
              onClick={goToWildFire}
              alt="/fire-alt.png"
              className="cursor-pointer rounded-3xl border-4 border-orange-500 hover:scale-105"
              src={fire}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
