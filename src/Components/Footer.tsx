import items from "@/utils/index";

export default function Footer() {
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {items.items.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-xl text-white font-semibold hover:underline me-4 md:me-6">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mt-6 justify-between items-center">
        <span className="text-lg text-gray-500 dark:text-gray-400">
          © 2023
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="text-xl text-white font-semibold hover:underline me-4 md:me-6">
              Term of use
            </a>
          </li>
          <li>
            <a href="#" className=" text-xl text-white font-semibold hover:underline me-4 md:me-6">
              Privacy policy
            </a>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
}
