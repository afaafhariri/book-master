import { useNavigate } from "react-router-dom";
const NoRoot = () => {
  const Navigate = useNavigate();
  const handleOnClick = () => {
    Navigate("/");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className=" text-center h-max-content">
        <h1 className="text-slate-800 text-9xl font-extrabold">OOPS!</h1>
        <h2 className="text-slate-800 text-6xl font-bold">404</h2>
        <h3 className="text-slate-800 text-4xl">No such page found</h3>
      </div>
      <button
        className="p-4 mt-10 bg-slate-400 font-semibold rounded-md hover:bg-black text-white transition-all duration-300 ease-in-out"
        onClick={handleOnClick}
      >
        Return to Home
      </button>
    </div>
  );
};

export default NoRoot;
