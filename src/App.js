import React, { useState, useEffect, } from "react";
import './App.css';
import img from './landscape_207075.jpg';

/* A. Create a component like in a sketch folder that includes:
            1. component with fixed height and width. Add box shadow to your component (you can see an example example2904.png)
            2. image, with fixed height and width,  should be with zoom animation on hover
            3. category name - with dynamic width due to the length of the text
            4. title - with dynamic height due to the length of the text, maximum 2 rows
            5. sub title - with dynamic height due to the length of the text, maximum 3 rows
            6. author name - with dynamic width due to the length of the text

In the example (test-absolute.html) all divs in component are in position absolute, just so you can use the placements and sizes.
You need to make it more dynamic and flexible.

  B.  Create div with fields for updating component:
        1. input to edit category name
        2. dropdown select to choose a background color of category name.
*/

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

