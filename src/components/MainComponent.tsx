import { BsDot, BsChat, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FiShare } from "react-icons/fi";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const MainComponent = () => {
  const supabaseClient = createServerComponentClient({
    cookies,
  });
  // const { data: userData, error: userError } =
  //   await supabaseClient.auth.getUser();

  return (
    <main className="flex w-[50%] h-full flex-col min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="border-t-[0.5px] h-30 px-4 border-b-[0.5px] flex items-stretch space-x-2 py-6 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="placeholder:text-2xl placeholder-text-gray-600 bg-transparent outline-none border-none border-b-[0.5px] p-4"
            placeholder="What's happening?"
          />
          <div className="w-full justify-between items-stretch py-4 flex">
            <div></div>
            <div className=" max-w-[100px]">
              <button className="rounded-full bg-twitterColor px-4 py-2 w-full text-lg font-bold text-center hover:bg-opacity-70 transition duration-200">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b-[0.5px] border-gray-600 p-2 px-4 flex flex-wrap space-x-4"
          >
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Club of Coders</div>
                  <div className="text-gray-500">@clubodcoderscom</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                veritatis quia pariatur officia adipisci, est, aspernatur illo
                odio aliquid accusantium, tenetur possimus. Aspernatur
                perferendis quia totam tenetur, laudantium quaerat explicabo.
              </div>
              <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
              <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer p-2">
                  <BsChat />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer p-2">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer p-2">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer p-2">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-black/10 transition duration-200 cursor-pointer p-2">
                  <FiShare />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
