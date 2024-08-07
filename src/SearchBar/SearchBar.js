import React from 'react';
import './SearchBar.css';



function SearchBar() {
    return (
        <div class="searchAI">
            <form action="#">
                <div className="Search-Input">
                  <input
                    type="text"
                    placeholder="我是"
                    name="search"
                    >
                  </input>
                </div>
                <button className='Search-Button'>
                    <div className="fa fa-search">AI Analysis</div>
                </button>
            </form>
        </div>

    );
  }

export default SearchBar;
