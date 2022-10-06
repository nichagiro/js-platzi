import { useEffect, useState } from 'react';

const useGetLogin = (props) => {
    const [user, setUser] = useState(false)

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('Users'));
        setUser(users.filter(user => user.email === props.email && user.password === props.password))
    }, [])

    console.log(user[0])
    return user[0]
}

export default useGetLogin