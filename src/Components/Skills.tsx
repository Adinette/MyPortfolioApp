import images from "@/assets/images";
import skills from "@/utils/index";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML", dots: 8 },
    { id: 2, name: "CSS", dots: 8 },
    { id: 3, name: "JavaScript", dots: 6 },
    { id: 4, name: "React", dots: 6 },
    { id: 5, name: "Next.js", dots: 6 },
    { id: 6, name: "Tailwind CSS", dots: 5 },
    { id: 6, name: "Bootstrap", dots: 7 },
    { id: 7, name: "Git", dots: 6 },
  ];
  return (
    <section className="p-6">
      <div className="container max-w-5xl	 p-4 mx-auto text-center">
        <div className="grid grid-cols-2 items-center p-4 space-x-4 md:space-x-6 dark:text-gray-50">
          <h2 className="text-7xl font-bold leading-none text-start sm:text-7xl">
            My Skills
          </h2>
          <div>
            <Image src={images.left_arrow} alt="left_arrow" />
          </div>
        </div>
      </div>
      <div className="container max-w-5xl grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-2">
        {skills.map((item: any) => (
          <div
            key={item.id}
            className="flex space-x-4 rounded-lg md:space-x-6 dark:text-gray-50"
          >
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{item.name}</p>
            </div>
            <div className="flex justify-center align-middle rounded-lg">
              {[...Array(item.dots)].map(() => (
                <Image src={images.dot} alt="dot" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
