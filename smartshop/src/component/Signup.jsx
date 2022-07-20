import React from 'react'
import { Link } from 'react-router-dom'

const Login = (active, setActive) => {
    return (
        <div className="login" onClick={() => setActive(false)}>
            <div className="login__content" onClick={e => e.stopPropagation()}>
                <h1>Регистрация</h1>
                <div className="input__data">
                <input name="email" type="text" placeholder="Введите почту" />
                <input name="password" type="password" placeholder="Введите пароль" />
                <input name="password" type="password" placeholder="Подтвердите пароль" />
                </div>
                <Link className="btn btn-outline-dark" aria-current="page" to="/">Регистрация</Link>
            </div>
        </div>
    )
}

export default Login
