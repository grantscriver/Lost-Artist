import React from "react";

function ShopDropDowns() {
    return (
        <>
            <div class="column  notification has-background-grey-light is-full is-offset-3 is-9 ">

                <div class="columns">

                    <div class="column has-text-centered">
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>State</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        IA
      </a>
                                    <a href="#" class="dropdown-item">
                                        MI
      </a>
                                    <a href="#" class="dropdown-item">
                                        MN
      </a>
                                    <a href="#" class="dropdown-item">
                                        ND
      </a>
                                    <a href="#" class="dropdown-item">
                                        SD
      </a>
                                    <a href="#" class="dropdown-item">
                                        WI
      </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column has-text-centered">
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Creators</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        Creator Name 1
      </a>
                                    <a href="#" class="dropdown-item">
                                        Creator Name 2
      </a>
                                    <a href="#" class="dropdown-item">
                                        Creator Name 3
      </a>
                                    <a href="#" class="dropdown-item">
                                        ...
      </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column has-text-centered">
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Color</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        Black
      </a>
                                    <a href="#" class="dropdown-item">
                                        White
      </a>
                                    <a href="#" class="dropdown-item">
                                        Grey
      </a>
                                    <a href="#" class="dropdown-item">
                                        Beige
      </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column has-text-centered">
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Size</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        X-Large
      </a>
                                    <a href="#" class="dropdown-item">
                                        Large
      </a>
                                    <a href="#" class="dropdown-item">
                                        Medium
      </a>
                                    <a href="#" class="dropdown-item">
                                        Small
      </a>

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