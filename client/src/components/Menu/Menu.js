import React from "react";

function Menu({children}) {
    return (
       
           <aside className="menu">
                
                <ul className="menu-list width-100">
                    {children.map((child, i)=> {
                        return child;
                    })}
                </ul>
                
                
            </aside> 
       
    )
}

export default Menu;


// Example of use:
// <Menu>
//     <li>IA</li>
//     <li>MN</li>
// </Menu>