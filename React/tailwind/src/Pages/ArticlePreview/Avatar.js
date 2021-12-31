const Avatar = ({ imageSRC, name, date }) => {
  return (
    <figure className="flex">
      <img className="rounded-full w-12 h-12 mr-4" src={imageSRC} alt="" />
      <figcaption>
        <div className="text-sm text-slate-500">{name}</div>
        <div className="text-[15px] font-thin text-slate-400">{date}</div>
      </figcaption>
    </figure>
  );
};
export default Avatar;
