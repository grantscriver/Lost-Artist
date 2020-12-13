import React from "react";

function ShopDropDowns() {
    return (
        <>
            <div className="column  is-full is-offset-3 is-9 ">
                <div className="columns">
                    <div className="column has-text-centered">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>State</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        IA
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        MI
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        MN
                                     </a>
                                    <a href="#" className="dropdown-item">
                                        ND
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        SD
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        WI
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Creators</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        Creator Name 1
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Creator Name 2
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Creator Name 3
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        ...
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Color</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        Black
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        White
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Grey
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Beige
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Size</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">
                                        X-Large
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Large
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Medium
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Small
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShopDropDowns