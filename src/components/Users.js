import React, {useEffect, useState} from "react";
import Axios from "axios";

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try {
            //요청이 시작 할 때에는 error와 users를 초기화하고
            setError(null);
            setUsers(null);
            //loading 상태를 true로 바꿉니다.
            setLoading(true);
            console.log("실행1")
            const response = await Axios.get(
                'https://jsonplaceholder.typicode.com/users',
                console.log("실행2")
            );
            setUsers(response.data);
            console.table(response.data)
        } catch (e) {
            setError(e)
        }
        setLoading(false);
    };


    useEffect(() => {
        fetchUsers();
    }, [])


    if (loading) return <div>로딩즁...</div>
    console.log("실행3")
    if (error) return <div>에러가 발생해따</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>

        </>
    )
}

export default Users;