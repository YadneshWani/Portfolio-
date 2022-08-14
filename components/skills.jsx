import Image from "next/image";
import { SKILLS } from "./constants";
function Skills(){
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical level</span>
            
    <div id="experience" >
      <div className="flex items-center justify-center px-8 py-16 text-center">

        <div className="grid  w-full grid-cols-1 items-center justify-around gap-0 sm:grid-cols-2 gap-0 lg:grid-cols-3 gap-8">
          {SKILLS.map(({ id,name,img_src }) => (
            <div
              key={id}
              className="flex place-content-center sm:flex flex-row items-center justify-center p-6 gap-0  lg:flex-row gap-6 lg:gap-0 self-center items-center justify-between w-4/5 p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={img_src} width="64px" height="64px" className="object-contain" alt={name} />
              <h3 className="font-light">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
        </section>
    );
}
export default Skills;