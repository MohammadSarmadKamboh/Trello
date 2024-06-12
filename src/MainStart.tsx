import { Link } from "react-router-dom";

const MainStart = () => {
  return (
    <>
      <p className="p-6 text-center">
        Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖
        now available for all Premium and Enterprise!{" "}
        <a
          className="text-[#0747a6] underline"
          href="https://www.atlassian.com/software/artificial-intelligence"
          target="_blank"
          rel="noopener">
          Learn more.
        </a>
      </p>
      <section className="flex bg-gradient-to-r from-[#5243aa] to-[#ed50b4] px-20 pt-28 pb-0">
        <div className="flex flex-col gap-6 text-white ">
          <h1 className="text-5xl ">
            Trello brings all your tasks, teammates, and tools together
          </h1>
          <p>Keep everything in the same place—even if your team isn’t.</p>
          <div className="my-5 flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 text-black border border-solid border-white rounded-md max-w-80 w-[376px]"
            />
            <Link to="/signup">
              <button
                type="submit"
                className="p-3 rounded-md bg-[#0065ff] hover:bg-[#0052cc]">
                Sign up - it’s free!
              </button>
            </Link>
          </div>

          <a
            className="flex gap-2"
            data-uuid="2Wmphdxwx9KTtdIcn3RFYb"
            href="#video">
            Watch video
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m5 5h14v14h-14z"></path>
              <path
                clip-rule="evenodd"
                d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z"
                fill="currentColor"
                fill-rule="evenodd"></path>
              <circle cx="12" cy="12" r="11.5" stroke="currentColor"></circle>
            </svg>
          </a>
        </div>
        <div>
          <img
            src="//images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=540"
            alt="An illustration showing different features of a Trello board"
            width="1360"
            height="1200"
            loading="lazy"
            className=""></img>
        </div>
      </section>
    </>
  );
};

export default MainStart;
