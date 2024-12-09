import images from "@/assets/images";
import Image from "next/image";

export default function About() {
  return (
      <div className="container flex flex-col justify-center mx-auto lg:flex-row relative" id="about">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={images.Business_SVG}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
          <h2 className="absolute top-32 left-1/2 transform -translate-x-1/2 text-7xl font-bold leading-none sm:text-7xl">
            About me
          </h2>
        </div>
        <div className="flex flex-col justify-center p-6 mt-64 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="mb-8 text-lg sm:mb-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            enim, ullam corporis ut illo rem, aspernatur soluta possimus eaque
            voluptate repellat. Ex quo animi cupiditate numquam quas facere
            deserunt expedita!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded-full dark:bg-fuchsia-600 dark:text-gray-50"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
  );
}
