import React, { useState } from "react";

const FlamesApp = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  let Flames = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];

  let res = "";
  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }
    let arr1 = name1.split("");
    let arr2 = name2.split("");
    for (let i = 0; i < name1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1.splice(i, 1);
        arr2.splice(index, 1);
        i--;
      }
    }

    setResult(Flames[(arr1.length + arr2.length) % 6]);
  };
  const handleClear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <>
      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        onClick={handleCalculate}
        data-testid="calculate_relationship"
        name="calculate_relationship"
      >
        Calculate Relationship Future
      </button>
      <button onClick={handleClear} data-testid="clear" name="clear">
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </>
  );
};

export default FlamesApp;
