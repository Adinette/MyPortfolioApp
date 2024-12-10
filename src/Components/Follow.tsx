import Image from "next/image";
import images from "@/assets/images";
export default function Follow() {
  return (
    <section className="p-6">
      <div className="container max-w-5xl grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-2">
        <div>
        <h2 className="text-8xl font-bold leading-none sm:text-8xl">
          Follow me
        </h2>
        <div className="flex">
        {[...Array(8)].map(() => (
          <Image src={images.dot} alt="dot" />
        ))}
      </div>
        </div>
        <div className="container max-w-md grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex justify-center items-center align-middle rounded-full bg-fuchsia-600">
          <Image src={images.linkedin} alt="linkedin" />
          </div>
          <div className="flex justify-center items-center align-middle rounded-full bg-fuchsia-600">
          <Image src={images.instagram} alt="instagram" />
          </div>
          <div className="flex justify-center items-center align-middle rounded-full bg-fuchsia-600">
          <Image src={images.facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </section>
  );
}
