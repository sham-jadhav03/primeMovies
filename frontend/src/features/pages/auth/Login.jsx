import React from 'react'
import "../../styles/auth.css"

const Login = () => {
    return (
        <>
            <main className="login-page">
                <div>
                    <form>
                        <h1>Login</h1>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login