import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">О нас</h1>
                        <p className="lead mb-4">
                        Кстати, некоторые особенности внутренней политики, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: сложившаяся структура организации способствует повышению качества своевременного выполнения сверхзадачи. Современные технологии достигли такого уровня, что разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает актуальность как самодостаточных, так и внешне зависимых концептуальных решений.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Свяжитесь с нами</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
