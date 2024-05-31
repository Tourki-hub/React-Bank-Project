import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div>
        <NavBar />
      </div>

      <div className="  bg-[#F7F8F1] w-full h-full flex justify-center items-center gap-10 flex-col overflow-y-auto ">
        <div className="border-solid bg-gray-200 w-[370px] h-[300px] flex justify-center items-center shadow-2xl rounded-lg">
          fgkf
        </div>
        <div className="border-solid bg-gray-200 w-[370px] h-[300px] flex justify-center items-center shadow-2xl rounded-lg ">
          fgkf
        </div>
        <div className="grid grid-cols-1 divide-y h-13"></div>
      </div>
    </div>
  );
};

export default Home;
