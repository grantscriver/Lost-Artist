import React, { useState } from 'react';
import { Input, DropDown, TextArea, FormBtn } from '../../components/Forms/Creatorfile'
// const [formObject, setFormObject] = useState({});
// function handleInputChange(event) {
//   const { name, value } = event.target;
//   setFormObject({...formObject, [name]: value})
// };
// // When the form is submitted, use the API.saveBook method to save the book data
// // Then reload books from the database
// function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log(event)

// };
function Creators() {



  return (

    <div class='container'>
      <div class="columns is-multiline is-mobile">
        <div class="column is-two-fifths">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
              </figure>
            </div>
            {/* <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div class="content">
                   A<a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div> */}
          </div>
        </div>
        <div class="column">
          {/* <div class="field">
   <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Text Input" value="Item Name"></input> */}
          <div class="field">
            <div class="control">
              <input class="input is-dark" type="text" placeholder="ITEM NAME"></input>

              <div className="level"></div>
              <span class="icon is-small is-left">
              </span>
              <textarea class="textarea" placeholder="ABOUT THE ITEM"></textarea>
              <div className="level"></div>
              <label class="label">Category</label>
              <div class="field">
                <div class="control">
                  <div class="select is-dark">
                    <select>
                      <option>HATS</option>
                      <option>SHIRTS</option>
                      <option>HOODIES</option>
                      <option>SHOES</option>
                    </select>
                  </div>
                  <div className="level"></div>
                  <div className="columns">
                    <div className="column">
                      <label class="label">SIZES</label>
                      <div>
                        <label class="checkbox">
                          <input type="checkbox"></input>
           SMALL
          </label>
                        <div className="level"></div>

                        <label class="checkbox">
                          <input type="checkbox"></input>
           MEDIUM
          </label>
                        <div className="level"></div>
                        <label class="checkbox">
                          <input type="checkbox"></input>
           LARGE
          </label>
                      </div>
                    </div>

                    <div className="column">
                      <label class="label">QTY</label>
                      <div>
                        <input class="input" type="text" placeholder="Small Qty"></input>
                        <input class="input" type="text" placeholder="Medium Qty"></input>
                        <input class="input" type="text" placeholder="Large Qty"></input>
                      </div>

                    </div>

                  </div>
                  <button class="button">SUBMIT ITEM</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};
export default Creators
