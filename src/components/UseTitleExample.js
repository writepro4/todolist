import React, {useEffect, useState} from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle)
    const updateTitle = () =>{
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

const HooksUseTitle = () =>{
    const titleUpdater = useTitle ("Loading...")
    setTimeout(()=> titleUpdater("Loading is Finish!"), 5000);
    return (
        <>
            <h1>useTitle Hooks</h1>
        </>
    )
}

export default HooksUseTitle