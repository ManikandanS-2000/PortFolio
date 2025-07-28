import Popup from "@/components/popup/popup";
import { useState } from "react"

export default function usePopup() {
    const [view, setView] = useState(false);
    const handleView = (event: any) => {
        const { currentTarget : { id : showbtn } } = event;
        const { target : { id : popuparea } } = event;
        if (showbtn == "popup-trigger") {
            setView(true);
        }
        if(popuparea == "popup-container"){
            setView(false);
        }
    };
    const popupComponent = view && <Popup close={handleView} />
    return { popupComponent, handleView }
}