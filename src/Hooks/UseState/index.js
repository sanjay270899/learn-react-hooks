import React, { useState } from 'react'
import { useForm } from './useForm';

function UseState() {

    /******************************************************************/
    const [ count, setCount ] = useState(0);
    /*
    * useState hook returns an array with two elements inside it.
    * 1st first element is the state, and 2nd element is the functional to update the state.
    * 
    * Above command is same as,
    * 
    *    var countState = useState(0);
    *    var count = countState[0];
    *    var setCount = countState[1];
    * 
    * Updating state,
    * 
    *   setCount(c => c + 1)
    *   c will have the current value of the count state.
    *   When count is updated, the component will re-render, and then now state variable will have new value.
    *   This is the recommended way to update state. (Not: setCount(count + 1)).
    *
    */

    /******************************************************************/
    const [ counts, setCounts ] = useState({
        count1 : 0,
        count2 : 0
    });
    /*
     * We can destructure count1 and count2 like,
     *
     *      const [ { count1, count2 }, setCount2 ] = useState({
     *          count1 : 0,
     *          count2 : 0
     *      })
    */

    /******************************************************************/
    const [ arrCounts, setArrCounts ] = useState([1, 3, 2]);
    const [ value, setValue ] = useState(0);

    /******************************************************************/
    const [ values, handleChange ] = useForm({name: '', password: ''})

    return (
    <div className="useState-Hook">
        <center><u><h1>useState Hook</h1></u></center>
        {/******************************************************************/}
        <h2>Simple Integer State</h2>
        <button
            onClick={() => setCount(currentCount => currentCount + 1)}
        >+</button>
        <div>{ count }</div>
        <hr/>

        {/******************************************************************/}
        <h2>Object State</h2>
        <button
            onClick={() => setCounts(currentCounts => 
                ({...currentCounts, count1: currentCounts.count1 + 1})
            )}
        >+</button>
        <span>{ counts.count1 }</span><br/>
        <button
            onClick={() => setCounts(currentCounts => 
                ({...currentCounts, count2: currentCounts.count2 + 1})
            )}
        >+</button>
        <span>{ counts.count2 }</span>
        <hr/>

        {/******************************************************************/}
        <h2>Array State</h2>
        {
            arrCounts.map(element => (
                <div>{element}</div>
            ))
        }
        <input type="number" value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button
            onClick={() => {
                setArrCounts(currentArr => [...currentArr, parseInt(value)]);
                setValue(0);
            }}
        >Add New Number</button>
        <hr/>

        {/******************************************************************/}
        <h2>Custom useState Hook</h2>
        Name: <input type="text" name="name" value={values.name}
            onChange={handleChange}
        /><br/>
        Password: <input type="password" name="password" value={values.password}
            onChange={handleChange}
        />
        <hr/>
    </div>
    );
}

export default UseState
