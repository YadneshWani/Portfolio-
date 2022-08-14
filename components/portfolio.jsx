import Image from "next/image";
import portfolio2 from "../assets/images/portfolio2.jpg";

import Project1 from '../assets/images/Project_1.png';
import { PROJECTS } from "./constants";
function Portfolio(){
    return(
        <section className="section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Projects I have completed</span>
            <div className="portfolio__container container grid">
                {
                    PROJECTS.map((project,index)=>(
                        <article className="portfolio__item" key={index}>
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} alt={`Project ${index}`} />
                        {/* <img src="../assets/images/portfolio2.jpg" alt="" srcset="" /> */}
                    </div>
                    <h3 className="project__title">{project.name}</h3>
                    <a href={project.github} target="_blank" rel="noreferrer" className="button__portfolio">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" rel="noreferrer" target="_blank" className="button__portfolio ml-2">Demo</a>
                </article>
                ))
            }
{/* 
                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                    <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title 2</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio ml-2">Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title 3</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio ml-2">Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title 4</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio ml-2">Demo</a>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item__image">
                        <Image src={portfolio2} />
                    </div>
                    <h3 className="project__title">Portfolio item title 5</h3>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio">Github</a>
                    <a href="https://github.com/Dnyanesh-Bachhav" target="_blank" className="button__portfolio ml-2">Demo</a>
                </article> */}
            </div>
        </section>
    );
}
export default Portfolio;