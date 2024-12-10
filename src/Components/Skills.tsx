import images from "@/assets/images";
import skills from "@/utils/index";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { id: 1, img: images.html },
    { id: 2, img: images.css },
    { id: 3, img: images.javascript },
    { id: 4, img: images.reatjs },
    { id: 5, img: images.nextjs },
    { id: 6, img: images.vuejs },
    { id: 7, img: images.nuxtjs },
    { id: 8, img: images.tailwindcss },
    { id: 9, img: images.bootstrap },
    { id: 10, img: images.sass },
    { id: 11, img: images.github },
    { id: 12, img: images.gitlab },
    { id: 13, img: images.bitbucket },
    { id: 14, img: images.jira },
    { id: 15, img: images.aws },
    { id: 16, img: images.ionic },
    { id: 17, img: images.vscode },
    { id: 17, img: images.swagger },
  ];
  return (
    <section className="p-6">
      <div className="container max-w-5xl p-4 mx-auto text-center">
        <h2 className="text-7xl font-bold leading-none  sm:text-7xl">
          My Skills
        </h2>
      </div>
      <div className="container mt-8 max-w-5xl flex flex-wrap justify-center mx-auto dark:text-gray-600">
        {skills.map((item: any) => (
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <Image src={item.img} alt="dot" />
          </div>
        ))}
      </div>
    </section>
  );
}
