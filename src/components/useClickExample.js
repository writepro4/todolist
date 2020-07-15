import React, { useRef, useEffect} from 'react'

const useClick = onClick => {

    const element = useRef();
    useEffect(() => {
        if(element.current) {
            element.current.addEventListener('click', onClick)
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick)
            }
        }
    }, []);

}


const HooksUseClick =() => {
    const sayHello =() => console.log("say hello")
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>UseClick</h1>
        </div>
    )
}
export default HooksUseClick;