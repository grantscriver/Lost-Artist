import React from "react";
import Hero from "../../components/Hero/Hero";
import ShopSideMenu from "../../components/ShopSideMenu/ShopSideMenu";



function Shop() {
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
                        </div>
                        <div class="tile is-parent">
                        </div>
                    </div>
                </div>
            </Hero>
        </>
    )
}

export default Shop