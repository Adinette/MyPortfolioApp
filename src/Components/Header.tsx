import items from "@/utils/index";

export default function Header() {
  return (
    <nav className="pt-4 fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-solid border-cyan-800 border-1 bg-slate-950 rounded-full">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Adinette
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label
            htmlFor="Toggle1"
            className="inline-flex mr-4 items-center space-x-4 cursor-pointer dark:text-gray-800"
          >
            <span className="text-white">Light</span>
            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
            </span>
            <span className="text-white">Dark</span>
          </label>
          <button
            type="button"
            className="text-white bg-fuchsia-600 hover:bg-fuachsia-900 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-full text-sm px-8 py-3 text-center dark:bg-fuschia-900 dark:hover:bg-fuschia-900 dark:focus:ring-fuschia-900"
          >
            Contact me
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {items.items.map((item:any) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-white hover:border-b-2 hover:border-gray-100"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
