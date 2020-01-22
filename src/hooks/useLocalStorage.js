import { useState } from 'react';

// We're going to set up some state here. Set up a state property called storedValue.

// This state property is going to take a function as it's initial value. When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.

// In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.

// Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript.

const useLocalStorage = (key, initialValue) => {

  // we are using a function as it's initial value because we could use logic if it's a function.
  const [storedValue, setStoredValue] = useState(() => {
    // this gets key from local storage and adds it into item
    const item = window.localStorage.getItem(key);
    // this returns item parsed into a JSON if key has value, otherwise, it returns intialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {

    // save to state
    setStoredValue(value);

    // saving to localstorage
    // setItem is key: and value format
    // converts a JavaScript object or value to a JSON string
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  // this returns storedValue in an array
  return [storedValue, setValue];

};