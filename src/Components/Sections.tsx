interface activesection {
  setAbout: React.Dispatch<React.SetStateAction<boolean>>;
  about : boolean,
  projects: boolean,
  details: boolean
}
const Sections: React.FC<activesection> = ({setAbout, about , projects , details}) => {
 
  return (
    <div className="hidden lg:flex text-white gap-6 font-Poppin cursor-pointer  flex-col opacity-60 font-medium text-[12px] tracking-widest w-[23%]">
      <div onClick={() => setAbout(true) } className="flex items-center group  gap-3">
        <hr className={`w-[25px] transition-all ease-in-out duration-500 ${about && 'w-[65px]'}`} /> ABOUT
      </div>
      <div className="flex items-center gap-3 group cursor-pointer">
        <hr className={`w-[25px] transition-all ease-in-out duration-500 ${projects && 'w-[65px]'}`} /> PROJECTS
      </div>
      <div className="flex items-center gap-3 group cursor-pointer uppercase">
        <hr className={`w-[25px] transition-all ease-in-out duration-500 ${details && 'w-[65px]'}`} /> Details
    </div>
    </div>
  )
}

export default Sections
