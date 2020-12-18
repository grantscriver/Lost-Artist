import React, { useState } from 'react';

function Editcreator() {
  return (
    <section className="hero has-background-grey-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-1">
            </div>
            <div className="column is-3">
              <div class="card">
                <div class="card-content has-text-centered">
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <p class="title is-4">
                    Click here
                  </p>
                  <div className="level"></div>
                  <p class="title is-4">
                    to add photo
                  </p>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                  <div className="level"></div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item has-background-grey-light">
                    <span>
                      Recommended Size: 400x600
                    </span>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column is-1">
            </div>
            <div className="column is-6">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Name" value=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="City" value=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>State</option>
                      <option>IA</option>
                      <option>MI</option>
                      <option>MN</option>
                      <option>ND</option>
                      <option>SD</option>
                      <option>WI</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">About:</label>
                <div class="control">
                  <textarea class="textarea" placeholder=""></textarea>
                </div>
              </div>
              <label class="label">Contact:</label>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="email" value="" ></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="instagram" value=""></input>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-black">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Editcreator