import React, { useState } from 'react'
import { useForm } from './useForm';

function UseState() {

    /******************************************************************/
    const [count, setCount] = useState(0);
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
    const [counts, setCounts] = useState({
        count1: 0,
        count2: 0
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
    const [arrCounts, setArrCounts] = useState([1, 3, 2]);
    const [value, setValue] = useState(0);

    /******************************************************************/
    const [values, handleChange] = useForm({ name: '', password: '' })

    /******************************************************************/
    function expensiveComputation() {
        // some expensive logic
    }

    const [state, setState] = useState(() => { expensiveComputation() });


    return (
        <div className="useState-Hook container">
            <center><h1>useState Hook</h1></center>
            <a
                className="code-link"
                href="https://github.com/sanjay270899/learn-react-hooks/blob/main/src/Hooks/UseState/index.js" target="_"
            >
                Code Link
            </a>
            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Simple Integer State</div>
                <div className="box-content">
                    <button
                        onClick={() => setCount(currentCount => currentCount + 1)}
                    >+</button>
                    <div>{count}</div>
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Object State</div>
                <div className="box-content">
                    <button
                        onClick={() => setCounts(currentCounts =>
                            ({ ...currentCounts, count1: currentCounts.count1 + 1 })
                        )}
                    >+</button>
                    &nbsp;<span>{counts.count1}</span><br />
                    <button
                        onClick={() => setCounts(currentCounts =>
                            ({ ...currentCounts, count2: currentCounts.count2 + 1 })
                        )}
                    >+</button>
                    &nbsp;<span>{counts.count2}</span>
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Array State</div>
                <div className="box-content">
                    {
                        arrCounts.map(element => (
                            <div key={Math.random()}>{element}</div>
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
                </div>
            </div>


            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Custom useState Hook</div>
                <div className="box-content">
                    Name: <input type="text" name="name" value={values.name}
                        onChange={handleChange}
                    /><br />
                    Password: <input type="password" name="password" value={values.password}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Lazy initital State in useState Hook</div>
                <div className="box-content">
                    <p>The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded.</p>
                    <p>Some time initial state of the useState is calculated with some expensive logic.</p>
                    <p>Now, if we direct call that expensive function, than that expensive function will be called</p>
                    <p>every time when compenents re-renders.</p>
                    <p>If the initial state is the result of an expensive computation,</p>
                    <p>you may provide a function instead, which will be executed only on the initial render.</p>
                    <p>And that function will return initial run.</p>
                </div>
            </div>

        </div>
    );
}

export default UseState
