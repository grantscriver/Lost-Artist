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
                                    <p className="dropdown-item">
                                        IA
                                    </p>
                                    <p className="dropdown-item">
                                        MI
                                    </p>
                                    <p className="dropdown-item">
                                        MN
                                     </p>
                                    <p className="dropdown-item">
                                        ND
                                    </p>
                                    <p className="dropdown-item">
                                        SD
                                    </p>
                                    <p className="dropdown-item">
                                        WI
                                    </p>
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
                                    <p className="dropdown-item">
                                        Creator Name 1
                                    </p>
                                    <p className="dropdown-item">
                                        Creator Name 2
                                    </p>
                                    <p className="dropdown-item">
                                        Creator Name 3
                                    </p>
                                    <p className="dropdown-item">
                                        ...
                                    </p>
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
                                    <p className="dropdown-item">
                                        Black
                                    </p>
                                    <p className="dropdown-item">
                                        White
                                    </p>
                                    <p className="dropdown-item">
                                        Grey
                                    </p>
                                    <p className="dropdown-item">
                                        Beige
                                    </p>
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
                                    <p className="dropdown-item">
                                        X-Large
                                    </p>
                                    <p className="dropdown-item">
                                        Large
                                    </p>
                                    <p className="dropdown-item">
                                        Medium
                                    </p>
                                    <p className="dropdown-item">
                                        Small
                                    </p>
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