import React from "react";

function Menu({children}) {
    
    
    return (
        <div className="columns">
           <aside className="menu left-side">
                
                <ul className="menu-list">
                    {children.map((child, i)=> {
                        return child;
                    })}
                </ul>
                
                
            </aside> 
        </div>
    )
}

export default Menu;
