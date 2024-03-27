import { createContext, useContext, useState } from "react";


const Context = createContext()

export const useSite = () => useContext(Context);

const Provider = ({ children }) => {
    const [video, setVideo] = useState(false);
    const [link, setLink] = useState(false);
    const [input, setInput] = useState("");
    const [title, setTitle] = useState(false);
    const [state, setState] = useState(false);
    const [html, setHtml] = useState(false);
    const data = {
        video,
        setVideo,
        input,
        setInput,
        link,
        setLink,
        title,
        setTitle,
        state,
        setState,
        html,
        setHtml,
    }


    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider;




