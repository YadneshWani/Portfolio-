import Image from 'next/image';
// import Logo from "../public/blob.svg";
import perfil from "../public/perfil.png";
import Logo from "../components/logo";
import { FIRST_NAME, GITHUB_LINK, INFO_DESCRIPTION, INSTAGRAM_LINK, LINKEDIN_LINK } from './constants';
function Info() {

    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href={LINKEDIN_LINK} className="home__social__icon" rel="noreferrer" target="__blank">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href={GITHUB_LINK} className="home__social__icon" rel="noreferrer" target="__blank">
                                <i className="uil uil-github-alt"></i>
                            </a>
                            <a href={INSTAGRAM_LINK} className="home__social__icon" rel="noreferrer" target="__blank">
                                <i className="uil uil-instagram"></i>
                            </a>
                        </div>
                        <div className="home__img">
                            <Logo/>
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Hi, I&apos;m {FIRST_NAME}</h1>
                            <h3 className="home__subtitle">Web Developer</h3>
                            <p className="home__description">{INFO_DESCRIPTION}</p>
                            <a href="" rel="noreferrer" className="button button__flex">
                                Contact Me <span className="button__icon"><i className="uil uil-message"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="home__scroll">
                        <a href="#about" rel="noreferrer" className="home__scroll__button button__flex">
                            <i className="uil uil-mouse-alt home__scroll__mouse "></i>
                            <span className="home__scroll__name">Scroll-down</span>
                            <i className="uil uil-arrow-down home__scroll__arrow"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Info;