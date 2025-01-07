import { useNavigate } from "react-router-dom";
const NoRoot = () => {
  const Navigate = useNavigate();
  const handleOnClick = () => {
    Navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className=" text-center h-max-content">
        <h1 className="text-slate-900 text-7xl font-extrabold">OOPS!</h1>
        <h1 className="text-red-700 text-9xl font-bold">404</h1>
        <h1 className="text-slate-900 text-5xl font-bold">
          no such page found
        </h1>
      </div>
      <button
        className="p-4 mt-10 bg-slate-400 font-semibold rounded-md hover:bg-red-700 text-white transition-all duration-300 ease-in-out"
        onClick={handleOnClick}
      >
        Return Home
      </button>
    </div>
  );
};

export default NoRoot;
