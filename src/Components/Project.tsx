import images from "@/assets/images";
import Image from "next/image";

export default function Project() {
  const project = [
    {
      id: 1,
      name: "Project Name 1",
      img: images.Business_SVG,
      date: "Date 2021",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat, excepturi."
    },
    {
      id: 2,
      name: "Project Name 2",
      img: images.Business_SVG,
      date: "Date 2022",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat, excepturi."
    },
    {
      id: 3,
      name: "Project Name 3",
      img: images.Business_SVG,
      date: "Date 2023",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat, excepturi."
    },
    {
      id: 4,
      name: "Project Name 4",
      img: images.Business_SVG,
      date: "Date 2024",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,adipisicing elit. Repellat, excepturi."
    },
  ];
  return (
    <section className="p-6" id="projects">
      <div className="container max-w-5xl p-4 mx-auto text-center">
        <h2 className="text-7xl font-bold leading-none sm:text-7xl">
          My Projects
        </h2>
      </div>
      <div className="container mt-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {project.map((item) => (
          <div className="bg-gray-950 p-8">
              <div className="space-y-2">
                <Image
                  src={item.img}
                  alt=""
                  className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-xs">
                  <span className="text-xl font-medium mt-4">{item.date}</span>
                </div>
                <a href="#" className="block">
                  <h3 className="text-3xl font-semibold my-6 dark:text-white">
                  {item.name}
                 </h3>
                </a>
                <p className="leading-snug text-lg dark:text-gray-400">{item.description}</p>
              </div>
           </div>
            ))}

          {/*{project.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-2 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div>
                <Image
                  src={item.img}
                  alt=""
                  className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className="mt-40">
                <h3 className="text-2xl font-semibold sm:text-4xl">
                  {item.name}
                </h3>
                <p>{item.date}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
