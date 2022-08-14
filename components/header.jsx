import Script from "next/script";
import { FIRST_NAME, STUDENT_NAME } from "./constants";
function Header() {
    
    // Activate/ deactivate the theme manually with the button
    const setTheme = () => {
        const themeButton = document.getElementById("theme__button");
        const darkTheme = "dark-theme";
        const iconTheme = "uil-sun";
        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem("selected-theme");
        const selectedIcon = localStorage.getItem("selected-icon");

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

        // We validate if the user perviously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
        }

        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        // We ahve the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    }
    function handleClick() {
        const navMenu = document.getElementById("nav-menu");
        const navToggle = document.getElementById("nav-toggle");

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add("showMenu");
            })
        }

    }

    function handleClose() {

        const navMenu = document.getElementById("nav-menu");
        const navClose = document.getElementById("nav-close");
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove("showMenu");
            })
        }

    }

    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav__logo">{FIRST_NAME}</a>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" rel="noreferrer" className="nav__link">
                                    <i className="uil uil-estate nav__icon"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" rel="noreferrer" className="nav__link">
                                    <i className="uil uil-user nav__icon"></i>
                                    About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" rel="noreferrer" className="nav__link">
                                    <i className="uil uil-file-alt nav__icon"></i>
                                    Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" rel="noreferrer" className="nav__link">
                                    <i className="uil uil-scenery nav__icon"></i>
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" rel="noreferrer" className="nav__link">
                                    <i className="uil uil-message nav__icon"></i>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close" id="nav-close" onClick={handleClose}></i>
                    </div>

                    <div className="nav__btns">
                        <i className="uil uil-moon change__theme" id="theme__button" onClick={setTheme}></i>
                        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    );
}
export default Header;