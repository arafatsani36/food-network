import Blog from "@/components/Blog/Blog";
import MainBar from "@/components/MainBar/MainBar";
import RightBar from "@/components/RightBar/RightBar";

const page = () => {
  return (
    <div className="flex">
      <div className="md:w-[20%]">
        <MainBar></MainBar>
      </div>
      <div className="md:w-[60%] w-[100%]">
        <Blog></Blog>
      </div>
      <div className="w-[18%] hidden md:block">
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default page;