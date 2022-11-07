import React, { useState, useEffect } from 'react';
import Qest2 from '../Qest2/Qest2'

import './Qest1.css';

function Qest1() {

    const [Real, setReal] = useState(false);
    const [Inp, setInp] = useState(0);
    const [Passes, setPasses] = useState(false);

    useEffect(() => {
        setReal(true)
    }, []);
    
    if (Real) {
        let slider = document.getElementById("myRange");
        let output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
            output.innerHTML = this.value;
            setInp(this.value);
        }
    }
    function newQest () {
        setPasses(true);
    }
    
    return (
        <div id="first">
            <h2>
                Вопрос 1:
            </h2>
            <div>
                Как вы оцениваете наш продукт?
            </div>
            <div className="slidecontainer">
                <input type="range" min="0" max="10" value={Inp} onClick={newQest} className="slider" id="myRange" />
                <p>Значение: <span id="demo"></span></p>
            </div>
            {
                Passes
                ? <Qest2 />
                : <div></div>
            }
        </div >

    );
}

export default Qest1;