
import { useEffect } from "react";
import { useSite } from "./Context/Context";
import Usage from "../usage.png";
function Download() {


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const { setVideo, input, setInput, setLink, setTitle, setState, setHtml, title, video, link } = useSite();

    useEffect(() => {
        setHtml(<div className="usage"> <img className="usage--img" src={Usage} alt="usage.png"></img></div>)
        // eslint-disable-next-line
    }, [])


    const handleClick = () => {
        const userurl = input;
        setVideo(userurl);
        setTitle(false);
        setHtml(<div className="loader__main"> <div className="loader__main--box loader"></div></div>);
        const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=https://www.youtube.com/watch?v=${userurl}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7e10cfe570mshcf786821a4a7fedp1f96a4jsn9debd2682b9c',
                'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
            }
        };

        fetch(url, options).then(res => {
            if (res.ok) {
                setState(res.ok)
                return res.json();
            }
        }).then(res => {


            setLink(res.link);
            setTitle(res.title);
            setHtml(<div className='videobox'>
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
        }).catch(err => console.log(err));
        setInput('');
    }

    return (
        <>
            <form typeof="#" className="main__box__form" onSubmit={e => e.preventDefault()}>
                <input className="main__box__form--input" value={input} type="text" onChange={handleChange} ></input>
                <button type="submit" className="main__box__form--button" onClick={handleClick}>Generate</button>
            </form>

        </>
    )
}

export default Download;