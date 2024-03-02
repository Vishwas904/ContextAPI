import { useContext, useState } from 'react'
import UserContext from '../context/userContext'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <>
            <div>
                <h2 className='text-3xl mb-6'>Login</h2>
                <input type="text"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='mb-4 p-2' />
                <br />
                <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mb-4 p-2' />

                <br />
                <button onClick={handleSubmit} className='mb-5'>Submit</button>
            </div>
        </>
    )
}

export default Login
