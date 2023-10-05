import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSection from "@/components/RightSection";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        {/* Left sidebar/ navigation */}
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  );
};

export default page;
