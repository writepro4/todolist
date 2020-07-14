import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component{
    render() {
        //여기서 우리는 비구조 할당 문법을 이용해서 props안에 있는 값들의 레퍼런스를 만들어준다.
        //이렇게 만들어주면 나중에 이 props들을 가져올 때 this.props.done이렇게 안가져오고 바로 done이렇게 쓸 수 있다.

        const {done, children, onToggle, onRemove} = this.props;
        //done = 일을 다 해결했는지, children = 일정에 들어갈 내용, onToggle = 완료 체크표시의 꺼졌다 켜졌다, onRemove = 해당 일정 제거

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/> {/*여기서 readOnly의 의미는 이 이벤트를 input체크박스에서 하는게 아니라 상위 개념인 click에서 관리함을 의미 사실 체크박스는 장식용이라고 봐도 괜챦*/}
                <div className={cx('text', {done})}>{children}</div>    {/*done이 참일 때랑 아닐 때랑 나눠서 관리*/}
                <div className={cx('delete')} onClick={(e) => {onRemove(); e.stopPropagation()}}>[지우기]</div>
            </div>
        )
    }
}

export default TodoItem;