import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar/ navigation */}
       <LeftSidebar />
        <main></main>
        <section></section>
      </div>
    </div>
  );
};

export default page;
