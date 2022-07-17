import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { handleCart } from '../redux/reducer'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

export default function Navbar() {
  const state = useSelector((state)=> state.handleCart)
  return (
<div className="navigation">
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container">
      <Link className="navbar-brand fw-bold fs-4" to="/">
        Smart Shop
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Главная
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Наши товары
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              О нас
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="buttons">
          <Link to="/Login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Вход</Link>
          <Link to="/signup" className="btn btn-outline-dark"><i className="fa fa-user-plus me-1"></i>Регистрация</Link>
          <Link to="/cart" className="btn btn-outline-dark"><i className="fa fa-shopping-cart me-1"></i>Корзина({state.length})</Link>
        </div>
      </div>
    </div>
  </nav>
</div>
  )
}
