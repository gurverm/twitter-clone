import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        {/* Left sidebar/ navigation */}
        <LeftSidebar />
        <MainComponent />
        <section className="w-[27%] sticky overflow-scroll top-2 mt-2 flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search"
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
              />
              <label
                htmlFor="searchBox"
                className="absolute p-4 top-0 left-0 h-full flex items-center justify-center  peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-2 px-4">Whats happening</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 last:rounded-b-xl p-4 transition duration-200"
                >
                  <div className="font-bold text-lg">#tending {i + 1}</div>
                  <div className="text-xs text-neutral-400">35.8k</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-2 px-4">Who to follow</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 space-x-3 items-center justify-between last:rounded-b-xl p-4 transition duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                    <div className="flex flex-col">
                      <div className="font-bold text-white">OtherUser 1</div>
                      <div className="text-gray-500 text-xs">@Otheruser1</div>
                    </div>
                    <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
