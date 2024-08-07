import React from 'react';
import './QuestionBar.css';


function QuestionBar() {
    return (
        <div className="questionAI">
            <form action="#">
                  <input
                    type="text"
                    placeholder="Support Tron Address and Tron Transaction Hash"
                    name="search"
                  >
                  </input>
                <button className='TRX-Button'>
                    <div className="fa fa-search">AI</div>
                </button>
            </form>
        </div>
    );
  }

export default QuestionBar;
