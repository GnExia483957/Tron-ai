import React from 'react';
import './SearchBar.css';



function SearchBar() {
    return (
        <div class="searchAI">
            <form action="#">
                  <input
                    type="text"
                    placeholder="Search Bar"
                    name="search"
                  >
                  </input>
                <button className='Search-Button'>
                    <div className="fa fa-search">AI Analysis</div>
                </button>
            </form>
        </div>

    );
  }

export default SearchBar;
