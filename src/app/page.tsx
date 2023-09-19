import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsBookmark, BsTwitter, BsThreeDots } from "react-icons/bs";

import Link from "next/link";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiHashtag,
  },
  {
    title: "Notifications",
    icon: GoBell,
  },
  {
    title: "Messages",
    icon: HiOutlineEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar/ navigation */}
        <section className="fixed w-[275] items-stretch flex flex-col h-screen">
          <div className="w-full mt-4 flex flex-col items-stretch  h-full space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 text-2xl transition duration-200 rounded-3xl py-2 px-6 flex items-center justify-start w-fit space-x-2"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title !== "Twitter" && <div>{item.title}</div>}</div>
              </Link>
            ))}
            <button className="w-full rounded-3xl m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition ">
              Tweet
            </button>
          </div>
          <button className="w-full flex items-center space-x-2 rounded-3xl m-4 p-4 text-2xl text-center hover:bg-white-10 transition ">
            <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-12 h-12"></div>
            <div className="text-left text-sm">
              <div className="font-semibold">Club of coders</div>
              <div>@codeOfCoders.com</div>
            </div>
            </div>
            <div><BsThreeDots/></div>
          </button>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
};

export default page;
