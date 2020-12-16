import React, { useState, useEffect } from 'react'

function UseEffect() {

    /******************************************************************/
    const [value1, setValue1] = useState('');
    useEffect(() => {
        console.log("Component is re-rendered.");
    });

    /******************************************************************/
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    useEffect(() => {
        console.log("Re-rendered due to value3.");
    }, [value3]);

    /******************************************************************/
    useEffect(() => {
        console.log("Empty Dependency Array.");
    }, []);

    /******************************************************************/
    useEffect(() => {
        console.log("Clean Up useEffect.")
        return () => {
            console.log("UseEffect.js component is unmounted.");
        }
    }, []);

    /******************************************************************/
    const [name, setName] = useState(() => {
        let n = localStorage.getItem('name');
        if (n) {
            return JSON.parse(n);
        }
        return '';
    });
    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    }, [name])

    return (
        <div className="useState-Hook container">
            <center><h1>useEffect Hook</h1></center>
            <a
                className="code-link"
                href="https://github.com/sanjay270899/learn-react-hooks/blob/main/src/Hooks/UseEffect/index.js" target="_"
            >
                Code Link
            </a>
            <i>Note: Initially every useEffect will be executed once.</i>
            <hr />
            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Simple useEffect</div>
                <div className="box-content">
                    <p>It will run every time, when the component re-renders.</p>
                    <p>Re-render the component by change the value of value1 in below input box.</p>
                    <p>Value1: <input type="text" name="value1" value={value1} onChange={(e) => setValue1(e.target.value)} /></p>
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">useEffect Hook with dependency array</div>
                <div className="box-content">
                    <p>Now if we want that useEffect should not run every time, when the component re-renders,</p>
                    <p>and only runs when a particular state changes then we can pass depedent state in [].</p>
                    <p>Now console will log only when value3 changes.</p>
                    <p>Value2: <input type="text" name="value2" value={value2} onChange={(e) => setValue2(e.target.value)} /></p>
                    <p>Value3: <input type="text" name="value3" value={value3} onChange={(e) => setValue3(e.target.value)} /></p>
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">useEffect Hook with empty dependency array</div>
                <div className="box-content">
                    <p>It will run only once, when the component is rendered first time.</p>
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">useEffect Hook with clean up function</div>
                <div className="box-content">
                    <p>If we return a function from useEffect, it will treated as a clean up function.</p>
                    <p>That function will be called when this component is unmouted (closed).</p>
                </div>
            </div>

            {/******************************************************************/}
            <div className="box">
                <div className="box-title">Persist state with useEffect Hook</div>
                <div className="box-content">
                    <p>Value will persist, even after refresh.</p>
                    <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
                </div>
            </div>
        </div>
    );
}

export default UseEffect