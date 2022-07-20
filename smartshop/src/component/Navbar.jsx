import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from "react";

export default function Navbar() {
  const state = useSelector((state)=> state.handleCart)
  const [loginActive, setLoginActive] = useState(true)
  const [signupActive, setSignActive] = useState(true)
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
          <Link className="btn btn-outline-dark" to="/Login" onClick={() => setLoginActive(true)}><i className="fa fa-sign-in me-1"></i>Вход</Link>
          <Link className="btn btn-outline-dark" to="/Signup" onClick={() => setSignActive(true)}><i className="fa fa-user-plus me-1"></i>Регистрация</Link>
          <Link className="btn btn-outline-dark" to="/cart"><i className="fa fa-shopping-cart me-1"></i>Корзина({state.length})</Link>
        </div>
      </div>
    </div>
  </nav>
</div>
  )
}
