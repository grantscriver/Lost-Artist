import React from "react";
import Hero from "../../components/Hero/Hero";
import Registration from "../../components/Registration/Registration"

function Register() {
    return (
        <>
            <section className="hero has-background-grey-light is-fullheight">
                <div className="hero-body">
                    {/* <div className="container">{children}</div> */}
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <div className="placeholder-three"></div>
                            </div>
                            <div className="column">

                                <p className="title is-3">Register</p>
                                <div class="field">
                                    <label class="label">Username</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Username" value=""></input>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Password" value=""></input>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">re-type Password</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="re-type Password" value=""></input>
                                    </div>
                                </div>
                                <div class="field is-grouped">
                                    <div class="control">
                                        <button class="button is-black">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register