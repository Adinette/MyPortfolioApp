import images from "@/assets/images";
import Image from "next/image";

export default function Banner() {
  return (
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h3 className="mt-7 mb-6 text-2xl font-semibold sm:mb-6">
            FRONT-END WEB DEVELOPPER
          </h3>
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Adinette DOUGLOUI
          </h1>
          <p className="border-l-4 border-l-solid border-l-gray-400 pl-5 mt-6 mb-8 text-lg sm:mb-12">
            I'm a front-end web developper Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatum eius assumenda aperiam amet
            distinctio doloribus quis.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={images.Business_SVG}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
  );
}
