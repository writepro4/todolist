import React, {createContext, useReducer, useContext} from "react";

//UsersContext 에서 사용 할 기본 상태
const initialState = {
    users: {
        loading : false,
        data: null,
        error: null
    }
}