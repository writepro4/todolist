//덕스 패턴을 사용할 때는 액션 타입을 정의할 때 앞에 접두사 counter와 같이 파일 명을 적어주어야한다. 안 헷갈리게 하기 위해서!
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


//액션함수 생성. 액션함수는 export를 붙이고 만들어야한다.
export const setDiff = diff => ({
    type:SET_DIFF,
    diff
})

export const increase = () => ({
    type:INCREASE,
})

export const decrease = () => ({
    type: DECREASE,
})


//초기 state를 나타내는 변수.
const initialState = {
    number : 0,
    diff : 1
}


//리듀서 생성. 리듀서는 export defulat를 붙여줘야한다.
export default function counter (state = initialState, action){
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number : state.number  + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number : state.number  - state.diff
            }
        default :
            return state;
    }
}