import React from "react";

function Registration() {
    return (
        <form className="pure-form">
            <fieldset>
                <legend>Register</legend>
                <input type="password" placeholder="Password" id="password" required></input>
                <input type="password" placeholder="Confirm Password" id="confirm_password" required></input>
                <button type="submit" className="pure-button pure-button-primary">Confirm</button>
            </fieldset>
        </form>

    )
}


export default Registration
