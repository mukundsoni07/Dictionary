import React from 'react'
import './Header.css'
import { TextField, MenuItem } from '@mui/material'
import countries from "../../data/Category";
import { debounce } from "lodash";
function Header({
    category,
    setCategory,
    setWord,
    word,
    setMeanings,
  }) {
      const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
      };
    
        const handleText = debounce((text) => {
        setWord(text);
      }, 500);
    

  return (
    <div className="header">
        <span className='title'>Dictionary</span>
        <div className="inputs">
            <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            className="select"
          >
            {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
    </div>
  )
}

export default Header