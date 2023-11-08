import MainBar from "@/components/MainBar/MainBar";

const page = () => {
  return (
    <div className="flex">
      <div className="w-[23.3%]">
        <MainBar></MainBar>
      </div>
      <div className="md:w-[60%] w-[100%]">
        containte
      </div>
      <div className="w-[15%]">
        right sidebar
      </div>
    </div>
  );
};

export default page;