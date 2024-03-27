

import { useSite } from "./Context/Context";

function Download() {


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const { setVideo, input, setInput, setLink, setTitle, setState, setHtml, setShow } = useSite();




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
            setShow(true);
            console.log(res);
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