import Avatar from "./Avatar";
import bg from "./Images/drawers.jpg";
import picture from "./Images/avatar-michelle.jpg";
import Sharebutton from "./Sharebutton";

const ArticlePreview = () => {
  return (
    <div className="font-manrope flex place-content-center items-center w-screen h-screen bg-[#ECF2F8] ">
      <section className="w-[327px] lg:w-[732px] min-w-[327px] lg:h-[280px] flex-col lg:flex-row lg:flex">
        <aside className="min-w-[300px] max-h-56 lg:max-h-fit overflow-hidden">
          <img src={bg} alt="" className="rounded-t-lg lg:rounded-l-lg object-fill h-full w-full block lg:ml-12" />
        </aside>
        <aside className="relative lg:w-[432px] lg:min-w-[432px] bg-white rounded-r-lg pt-7 pb-4 px-9">
          <h1 className="lg:text-xl mb-3 text-slate-600">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-[0.85rem] font-thin font-sans mb-5 text-slate-500">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex justify-between items-center">
            <Avatar
              imageSRC={picture}
              name="Michelle Appleton"
              date="28 Jun 2020"
            ></Avatar>
            <Sharebutton></Sharebutton>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ArticlePreview;
