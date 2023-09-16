import Lottie from "lottie-react";
import HeroAnimation from "../../../assets/Animation - 1694865932790.json";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row justify-between items-center mx-12">
        <div>
          <h1 className="text-5xl font-semibold text-gray-700">
            Our site <br /> is currently under development.
          </h1>

          {/* Subscribe form */}
          <div className="pt-8">
            <p className="py-1">
              Please subscribe here. We will notify you when our website is
              live!
            </p>

            <div className="flex w-full items-center space-x-2 md:w-1/2">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social media handle */}
          <div className="py-4 flex items-center gap-3">
            <BiLogoFacebook
              size="32px"
              className=" text-blue-500 rounded-full cursor-pointer"
            />

            <BiLogoLinkedin size="32px" className="cursor-pointer" />
            <BiLogoTwitter
              size="32px"
              className=" text-blue-500 cursor-pointer"
            />
          </div>
        </div>

        <Lottie
          animationData={HeroAnimation}
          loop={true}
          className="md:w-1/2"
        />
      </div>
    </div>
  );
};

export default Hero;
