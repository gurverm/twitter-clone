import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* Left sidebar/ navigation */}
        <LeftSidebar />
        <main className="ml-[275px] p-6 mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-2xl font-bold">Home</h1>
        </main>
        <section></section>
      </div>
    </div>
  );
};

export default page;
