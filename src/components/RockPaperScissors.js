import React, {useEffect, useRef, useState} from "react";


const RSPHooks = () => {
    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find(function (v) {
            return v[1] === imgCoord;
        })[0];
    }

    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px'
    }

    const scores = {
        가위: 1,
        바위: 0,
        보: -1
    }

    const [result, setResult] = useState('')
    const [imgCoord, setImgcoord] = useState(rspCoords.바위)
    const [score, setScore] = useState(0)
    const interval = useRef()

    useEffect(() => {
        interval.current = setInterval(changeHand, 1000);
        return () => {
            clearInterval(interval.current)
        }
    }, [imgCoord])

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgcoord(rspCoords.가위)
        } else if (imgCoord === rspCoords.가위) {
            setImgcoord(rspCoords.보)
        } else {
            setImgcoord(rspCoords.바위)
        }
    }

    const handleOnclick = (choice) => () => {
        clearInterval(interval.current)
        const myScore = scores[choice]
        const cpuScore = scores[computerChoice(imgCoord)]
        const diff = myScore - cpuScore

        if ([-1, 2].includes(diff)) {
            setScore((prevScore) => {
                return prevScore + 1
            })
            setResult('이겼습니다.')
        } else if (diff === 0) {
            setResult('비겼습니다.')
        } else {
            setResult('졌습니다.')
            setScore((prevScore) => {
                return prevScore - 1
            })
        }

    }


    return (
        <>
            <div id="computer"
                 style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
            <div>
                <button id="rock" className="btn" onClick={handleOnclick('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={handleOnclick('가위')}>가위</button>
                <button id="paper" className="btn" onClick={handleOnclick('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점!</div>
        </>
    )


}

export default RSPHooks