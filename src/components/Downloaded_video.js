import { useEffect } from "react";
import { useSite } from "./Context/Context";
import Usage from "../usage.png";

function ShowDownload() {
    const { html, setHtml, link, video, title, show } = useSite();
    // const regex = '[\\?&]v=([^&#]*)';
    // const results = video && video.match(regex);


    useEffect(() => {
        setHtml(<div className={show ? 'videobox' : 'disabled'}>
            <div className="videobox__video">
                <img alt="videoimg" src={`https://img.youtube.com/vi/${video}/0.jpg`}></img>
            </div>
            <div className="videobox__title">
                <h3>Dönüştürülen Müzik: {title}</h3>
            </div>
            <div className="videobox__download">
                <a href={link} target="_blank" rel="noopener noreferrer" className="videobox__download--button">
                    <span className="videobox__download--button-desc"> Download</span>
                    <i className="fas fa-download"></i>
                </a>
            </div>
        </div >)

    }, [show]);

    useEffect(() => {
        setHtml(<div className="usage"> <img className="usage--img" src={Usage} alt="usage.png"></img></div>)

        // eslint-disable-next-line
    }, [])

    return html;

}



export default ShowDownload;