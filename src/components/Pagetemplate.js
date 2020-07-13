import React from "react";
import styles from "./PageTemplate.scss";
import className from 'classnames/bind'

//같은 스타일로 묶는다는 의미?
//처음에 bind해주었으니 import한 scss파일에서 같다?
const cx = className.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('context')}>
                {/* 여기에 TtdoList가 들어감*/}
                {children}
            </div>
        </div>
    )
}

export default PageTemplate
