
import { useSite } from "./Context/Context";
function ShowDownload() {
    const { html } = useSite();
    // const regex = '[\\?&]v=([^&#]*)';
    // const results = video && video.match(regex);

    return  html;

}



export default ShowDownload;