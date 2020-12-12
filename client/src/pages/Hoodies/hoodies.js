import React from "react";
import Hero from "../../components/Hero/Hero";
import ShopSideMenu from "../../components/ShopSideMenu/ShopSideMenu";
import ShopDropDowns from "../../components/ShopDropDowns/ShopDropDowns";

function Hoodies() {
    return (
        <>
            <Hero>
                <ShopDropDowns>
                </ShopDropDowns>

                <div class="columns">
                    <div class="column">
                        <ShopSideMenu>
                        </ShopSideMenu>
                    </div>
                    <div class="column">
                        <p class="title">This is Hoodies</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div class="column">
                        <p class="title">This is Hoodies</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                    <div class="column">
                        <p class="title">This is Hoodies</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                            </img>
                        </figure>
                    </div>
                </div>

            </Hero>
        </>
    )
}

export default Hoodies