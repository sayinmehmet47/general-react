// import the default export and the named export `useState` from the 'react' library

import { useRef } from 'react'
import React, { useState, useEffect } from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`

  const colorNames = [
    'Aquamarine',
    'BlueViolet',
    'Chartreuse',
    'CornflowerBlue',
    'Thistle',
    'SpringGreen',
    'SaddleBrown',
    'PapayaWhip',
    'MistyRose',
  ];
  const [color, setColor] = useState();

  const prevColor = useRef("");
  useEffect(() => {
    prevColor.current = color;
        },[color]);

  const divStyle = { backgroundColor: color };
console.log(prevColor,color)
  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)} key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
}
