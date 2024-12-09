export default function Contact() {
  return (
    <section className="p-6 bg-gray-950" id="contact">
      <div className="container max-w-5xl p-4 mx-auto text-center">
        <h2 className="text-7xl font-bold leading-none sm:text-7xl">Contact</h2>
      </div>
      <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ">
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="block w-full p-2 rounded-full bg-fuchsia-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="block w-full p-2 rounded-full bg-fuchsia-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            className="block w-full p-2 rounded-full bg-fuchsia-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded-full bg-fuchsia-600 focus:bg-fuchsia-800 hover:bg-fuchsia-800 dark:text-gray-50"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
