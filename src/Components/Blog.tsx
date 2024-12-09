import images from "@/assets/images";
import Image from "next/image";

export default function Blog() {
    const blog = [
        {
            id: 1,
            title: "Blog 1",
            img: images.Business_SVG,
            description: " Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per temporalbucius perfecto, ei probatus consulatu patrioque mea, evocent delicata indoctum pri.",
          },
          {
            id: 2,
            title: "Blog 2",
            img: images.Business_SVG,
            description: " Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per temporalbucius perfecto, ei probatus consulatu patrioque mea, evocent delicata indoctum pri.",
          },
          {
            id: 3,
            title: "Blog 3",
            img: images.Business_SVG,
            description: " Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per temporalbucius perfecto, ei probatus consulatu patrioque mea, evocent delicata indoctum pri.",
          },
    ]
  return (
    <section className="p-6" id="blog">
      <div className="container max-w-5xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <div className="max-w-xl mx-auto group hover:no-underline focus:no-underline ">
            <h2 className="text-7xl font-bold leading-none sm:text-7xl">
              My Blog
            </h2>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded-full dark:bg-fuchsia-600 dark:text-gray-50"
              >
                See all
              </a>
            </div>
          </div>
          {blog.map((item:any)=>(
          <div key={item.id} className="max-w-xl mx-auto ">
            <Image
              src={item.img}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>
              <p>
                {item.description}
              </p>
              <button
                type="button"
                className="px-8 py-3 font-semibold text-fuchsia-600"
              >
                Read more
              </button>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    </section>
  );
}
