import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render() {
        //props안에 있는 값들의 레퍼런스를 만든다
        //이렇게 하면 나중에 done만 입력해도됨

        //done = 일을 다 해결했는지
        //children = 일정에 들어갈 내용
        //onToggle = 완료 체크 표시
        //onRemove = 해당 일정 제거
        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
            </div>
        )

    }
}

export default TodoItem;
