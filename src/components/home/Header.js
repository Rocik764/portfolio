import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
            <section id="header">
                <div className="night-wrapper">
                    <div className="containerxd">
                        <div className="main-info">
                            <h1>Hello!</h1>
                                <Typed
                                    className="typed-text"
                                    strings={["I'm Simon", "I'm a fullstack developer.", "Go ahead and checkout my portfolio!"]}
                                    typeSpeed={30}
                                    backSpeed={20}
                                    loop
                                />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Header
