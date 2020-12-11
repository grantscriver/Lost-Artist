import React from "react";
import Hero from "../../components/Hero/Hero";
import ShopSideMenu from "../../components/ShopSideMenu/ShopSideMenu";

function Hats() {
    return (
        <>
            <Hero>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <ShopSideMenu>
                                </ShopSideMenu>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                    <p class="title">This is Hats</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png">
                                        </img>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-success">
                            <div class="content">
                                <p class="title">Right tile</p>
                                <p class="subtitle">With even more content</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png">
                                    </img>
                                </figure>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-success">
                            <div class="content">
                                <p class="title">Right tile</p>
                                <p class="subtitle">With even more content</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png">
                                    </img>
                                </figure>
                            </div>
                        </article>
                    </div>
                </div>
            </Hero>
        </>
    )
}

export default Hats