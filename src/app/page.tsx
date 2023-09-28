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
        <section className="w-[27%] sticky top-0 mt-2 right-0 flex flex-col items-stretch h-screen px-6">
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
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default page;
