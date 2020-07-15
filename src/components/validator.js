import React, {Component, useState} from "react";

const useInput = (initialValue, validator) => {
    //기본적으로 input을 업데이트하는 것.
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        const {
            target : {value}
        }= e;

        let willUpdate = true;
        if(typeof  validator === "function"){
            willUpdate = validator(value)
        }
        if(willUpdate){
            setValue(value)
        }
    }
    return {value, onChange}
}

const HooksUseInput = () =>{
    const maxLength = (value) => value.length <= 10;
    // const maxLength_ = 0
    const name = useInput("Mr. " , maxLength)
    return(
        <input placeholder="input your name " value={name.value} onChange={name.onChange}/>
    )
}
