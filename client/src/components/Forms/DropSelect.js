import React from "react";


function CategorySelect() {
    return (
        <div className="dropdown  is-hoverable">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Category</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content" name ='category' id='catselect'>
                    <p className="dropdown-item">
                        All
                    </p>
                    <p  className="dropdown-item">
                        Hats
                    </p>
                    <p className="dropdown-item">
                        Shirts
                    </p>
                    <p className="dropdown-item">
                        Hoodies
                    </p>
                    <p className="dropdown-item">
                        Shoes
                    </p>
                </div>
            </div>
        </div>
        
    )
  }


function ColorSelect(props) {
    return (
        <div className={`dropdown is-hoverable ${props.spacing}`}>
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
                    <p  className="dropdown-item">
                        White
                            </p>
                    <p  className="dropdown-item">
                        Black
                            </p>
                    <p  className="dropdown-item">
                        Grey
                            </p>
                    <p  className="dropdown-item">
                        Beige
                            </p>
                </div>
            </div>
        </div>
    )
}


export {
    CategorySelect, 
    ColorSelect
};