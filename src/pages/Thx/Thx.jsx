import React, { useEffect } from 'react';

import './Thx.css';

function Thx() {
    
    useEffect(() => {
        let body = document.querySelector("body")
        body.innerHTML = `<div id="thx"><h1>Спасибо!</h1></div>`
      }, []);

    return (
        <>

        </>

    );
}

export default Thx;