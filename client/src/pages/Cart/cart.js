import React from 'react';
import "./cart.css"


function Cart() {
    return (
        <>
            <div className="container has-background-grey-light">
                <div className="columns">
                    <div className="column">
                        <h1>CART</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="columns">
                        <div className="column">
                            <img src="https://images.pexels.com/photos/1868475/pexels-photo-1868475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=320&w=480"></img>
                        </div>
                        <div className="column">
                            <h1>PLAIN WHITE</h1>
                        </div>
                        <div className="column">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>QTY</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <a href="#" className="dropdown-item">
                                            1
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            2
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            3
                                     </a>
                                        <a href="#" className="dropdown-item">
                                            4
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            5
                                    </a>
                                        <a href="#" className="dropdown-item">
                                            6
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <button className="icon">
                                <i className="fas fa-times-circle" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart