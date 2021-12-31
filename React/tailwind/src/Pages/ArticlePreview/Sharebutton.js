import facebook from "./Images/icon-facebook.svg";
import twitter from "./Images/icon-twitter.svg";
import pinterest from "./Images/icon-pinterest.svg";

const Sharebutton = () => {

  return (
    <div className="group">
      <div className="hidden absolute w-full  lg:w-64 bottom-0 left-0 lg:bottom-[31%] lg:left-[58%] flex-col items-center  group-hover:flex">
        <div className="w-full lg:w-64 h-20 lg:h-14 shadow-lg bg-slate-600 rounded-b-lg lg:rounded-lg flex items-center justify-around px-7 text-slate-400 font-thin tracking-[5px] text-sm">
          SHARE
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
          <div className="flex ml-10 lg:hidden w-10 h-10 flex-none  justify-center items-center rounded-full bg-white cursor-pointer group-hover:bg-[#6E8099]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                className="group-hover:fill-white"
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
        </div>
        <div className="w-0 h-0 border-l-[14px] border-l-transparent border-t-[14px] border-t-slate-600 border-r-[14px] border-r-transparent hidden lg:block"></div>
      </div>
      <div className="flex w-10 h-10 flex-none  justify-center items-center rounded-full bg-[#ECF2F8] cursor-pointer group-hover:bg-[#6E8099]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                className="group-hover:fill-white"
                fill="#6E8098"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </div>
    </div>
  );
};

export default Sharebutton;
