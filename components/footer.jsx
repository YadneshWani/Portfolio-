import { FIRST_NAME, INSTAGRAM_LINK, LINKEDIN_LINK, MAIN_ROLE, STUDENT_NAME, YOUTUBE_LINK } from "./constants";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">{FIRST_NAME}</h1>
                        <span className="footer__subtitle">{MAIN_ROLE}</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#skills" rel="noreferrer" className="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio" rel="noreferrer" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" rel="noreferrer" className="footer__link">Contact</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href={INSTAGRAM_LINK} rel="noreferrer" className="footer__social" target="_blank">
                            <i className="uil uil-instagram"></i>
                            {/* <img alt="svgImg" style={{color: 'white'}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDQzLjc1MzkwNiA2LjQwMjM0MzggQyA0Mi41MzYyMSA2LjM0ODk5NjkgNDEuMjk0NzkyIDYuNzEyODk4IDQwLjI3MTQ4NCA3LjQ2ODc1IEwgMzcuNTI1MzkxIDkuNDk2MDkzOCBMIDI1IDE4Ljc1NTg1OSBMIDEyLjU5MTc5NyA5LjU4Mzk4NDQgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDExLjk0OTIxOSA5LjMwMDc4MTIgTCAxMi4xOTkyMTkgOS4zMDA3ODEyIEwgOS43MzQzNzUgNy40NzY1NjI1IEMgOC43MTA0MDQyIDYuNzE4ODM2MyA3LjQ2NzE0OTMgNi4zNTI4ODk1IDYuMjQ4MDQ2OSA2LjQwNjI1IEMgNS4wMjg5NDQ0IDYuNDU5NjEwNSAzLjgzNDk0NjIgNi45MzE0NjY3IDIuOTA4MjAzMSA3Ljg0NTcwMzEgQyAxLjczMDk0NTQgOS4wMDYzNzk4IDEgMTAuNjI5ODMxIDEgMTIuNDEwMTU2IEwgMSAxNS44NDM3NSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMSAxNi4xMzg2NzIgTCAxIDM5LjUgQyAxIDQxLjQyMTE4OCAyLjU3ODgxMTcgNDMgNC41IDQzIEwgMTIgNDMgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDEzIDQyIEwgMTMgMjUuMzczMDQ3IEwgMjQuNDA2MjUgMzMuODA0Njg4IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAyNS41OTM3NSAzMy44MDQ2ODggTCAzNyAyNS4zNzMwNDcgTCAzNyA0MiBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMzggNDMgTCA0NS41IDQzIEMgNDcuNDIxMTg4IDQzIDQ5IDQxLjQyMTE4OCA0OSAzOS41IEwgNDkgMTYuMTE5MTQxIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCA0OSAxNS44NTkzNzUgTCA0OSAxMi40MTAxNTYgQyA0OSAxMC42NTE3IDQ4LjI5MDQ1NSA5LjAzNTc4MjEgNDcuMTI4OTA2IDcuODczMDQ2OSBDIDQ3LjA5NTMzNiA3LjgzOTQ3NjkgNDcuMDg0MDg2IDcuODMwMTggNDcuMDk3NjU2IDcuODQzNzUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDQ3LjA5MTc5NyA3LjgzNzg5MDYgQyA0Ni4xNjUyNDIgNi45MjU2NzU2IDQ0Ljk3MTYwMyA2LjQ1NTY5MDUgNDMuNzUzOTA2IDYuNDAyMzQzOCB6IE0gNDMuNjQ0NTMxIDguNDAwMzkwNiBDIDQ0LjQwMDgzNSA4LjQzMDA0MzYgNDUuMTM0MDQ5IDguNzE2ODg3NiA0NS42ODk0NTMgOS4yNjM2NzE5IEMgNDUuNzA4MzYzIDkuMjgyMzQzOSA0NS43MjIxNzEgOS4yOTY0NDI0IDQ1LjcxMjg5MSA5LjI4NzEwOTQgQyA0Ni41MDkzNCAxMC4wODQzNzQgNDcgMTEuMTg4NjEzIDQ3IDEyLjQxMDE1NiBMIDQ3IDE1LjQ5NjA5NCBMIDM5IDIxLjQwODIwMyBMIDM5IDExIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAzOC45OTYwOTQgMTAuODk4NDM4IEwgNDEuNDU4OTg0IDkuMDc4MTI1IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCA0MS40NjA5MzggOS4wNzgxMjUgQyA0Mi4xMDk1NzggOC41OTg5NzcgNDIuODg4MjI4IDguMzcwNzM3NSA0My42NDQ1MzEgOC40MDAzOTA2IHogTSA2LjM1NzQyMTkgOC40MDYyNSBDIDcuMTE0NTY5NCA4LjM3NjYxIDcuODk1ODkyNyA4LjYwMzcxMDUgOC41NDQ5MjE5IDkuMDgzOTg0NCBMIDExLjAwMzkwNiAxMC45MDIzNDQgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDExIDExIEwgMTEgMjEuNDA4MjAzIEwgMyAxNS40OTYwOTQgTCAzIDEyLjQxMDE1NiBDIDMgMTEuMTc0NDgyIDMuNTAxNzU3NyAxMC4wNjg4NTUgNC4zMTI1IDkuMjY5NTMxMiBDIDQuODY3NzU2OSA4LjcyMTc2NzcgNS42MDAyNzQzIDguNDM1ODg5NSA2LjM1NzQyMTkgOC40MDYyNSB6IE0gMzcgMTIuMzcxMDk0IEwgMzcgMjIuODg2NzE5IEwgMjUgMzEuNzU1ODU5IEwgMTMgMjIuODg2NzE5IEwgMTMgMTIuMzczMDQ3IEwgMjQuNDA2MjUgMjAuODA0Njg4IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAyNS41OTM3NSAyMC44MDQ2ODggTCAzNyAxMi4zNzEwOTQgeiBNIDMgMTcuOTgyNDIyIEwgMTEgMjMuODk2NDg0IEwgMTEgNDEgTCA0LjUgNDEgQyAzLjY1OTE4ODMgNDEgMyA0MC4zNDA4MTIgMyAzOS41IEwgMyAxNy45ODI0MjIgeiBNIDQ3IDE3Ljk4MjQyMiBMIDQ3IDM5LjUgQyA0NyA0MC4zNDA4MTIgNDYuMzQwODEyIDQxIDQ1LjUgNDEgTCAzOSA0MSBMIDM5IDIzLjg5NjQ4NCBMIDQ3IDE3Ljk4MjQyMiB6Ij48L3BhdGg+PC9zdmc+"/> */}
                        </a>
                        <a href={LINKEDIN_LINK} rel="noreferrer" className="footer__social" target="_blank">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href={YOUTUBE_LINK} rel="noreferrer" className="footer__social" target="_blank">
                            <i className="uil uil-youtube"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; {STUDENT_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;