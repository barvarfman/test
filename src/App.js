import React, { useState, useEffect, } from "react";
import './App.css';
import img from './landscape_207075.jpg';


export function App() {
  const [color, setColor] = useState('red');
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange({ target }) {
    const field = target.name;
    const value = target.value;

    switch (field) {
      case 'term':
        setSearchTerm(value)
        break;
      default:
        console.log('Err updating searchTerm')
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="componenta">
          <img className="imgArea" src={img} />
          <div className="test">
            <div className={`category ${color}`}><span>{searchTerm}</span></div>
            <div className="title">סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה</div>
            <div className="subTitle">גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות
              הטלוויזיה בכל הערוצים הן תוכניות אוכל.</div>
            <div className="author">שירית גל</div>
          </div>
        </div>
        <div className="main-select-container">
          <div className="select-container">
            <div className="input-container">
              <div className="input-title-container">
                <div className="input-title">שם קטגוריה</div>
              </div>
              <input className="input-category-name" name="term" type="text" value={searchTerm} onChange={handleChange} />
            </div>
            <div className="select-container">
              <div className="select-title-container">
                <div className="select-title">צבע רקע-שם קטגוריה</div>
              </div>
              <select
              className="select-color"
                value={color}
                onChange={e => setColor(e.target.value)}>
                <option value="red">אדום</option>
                <option value="blue">כחול</option>
                <option value="green">ירוק</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

