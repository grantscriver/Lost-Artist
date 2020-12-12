import React from "react";
import Menu from "../../components/Menu/Menu";


function State() {
    return(
        <div className="container">
            <Menu>
                <li><a href="/state/iowa">Iowa</a></li>
                <li><a href="/state/michigan">Michigan</a></li>
                <li><a href="/state/minnesota">Minnesota</a></li>
                <li><a href="/state/northdakota">North Dakota</a></li>
                <li><a href="/state/southdakota">South Dakota</a></li>
                <li><a href="/state/wisconsin">Wisconsin</a></li>
            </Menu>
        </div>
    )

}

export default State;