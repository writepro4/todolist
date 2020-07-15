import React, {useEffect, useState} from 'react'


const HooksUseEffect =() =>{
    const sayHello =() =>console.log("Hello")
    useEffect( () =>sayHello(),[]);


    const [number, setNumber] = useState(0)
    const [Anumber, setAnumber] = useState(0)
    return (
        <>
            <h1>useEffect</h1>
            <button onClick ={() => setNumber(number+1)}>{number}</button>
            <button onClick ={() => setAnumber(Anumber +1)}>{Anumber}</button>
        </>
    )
}

export default HooksUseEffect