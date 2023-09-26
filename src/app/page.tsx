import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar/ navigation */}
        <LeftSidebar />
        <MainComponent/>
        {/* <section></section> */}
      </div>
    </div>
  );
};

export default page;
