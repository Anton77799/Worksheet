import React, { useState, useEffect } from 'react';
import Thx from '../Thx/Thx'

import './Qest2.css';

function Qest2() {

  const [Real2, setReal2] = useState(false);
  const [Inp2, setInp2] = useState(0);
  const [Passes2, setPasses2] = useState(false);
  const [add1, setadd1] = useState(false);
  const [add2, setadd2] = useState(false);
  const [add3, setadd3] = useState(false);
  const [Send, setSend] = useState(false);
  const [ThxPage, setThxPage] = useState(false);

  useEffect(() => {
    setReal2(true)
  }, []);

  if (Real2) {
    let slider2 = document.getElementById("myRange2");
    let output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function () {
      output2.innerHTML = this.value;
      setInp2(this.value);
    }

  }

  function lastPage() {
    setThxPage(true)
  }

  function newQest2() {
    if (0 <= Inp2 <= 6) {
      setPasses2(true)
      setSend(false)
    }
    if (Inp2 > 6) {
      setPasses2(false)
      setSend(true)
    }
  }
  function showMe1() {
    if (add1) {
      setadd1(false)
      let col = document.getElementById("1")
      col.style.background = "none";
      setTimeout(() => {
      let alluse = document.querySelectorAll(".this")
      if (alluse.length === 0) setSend(false)
    }, "0");
    }
    else {
      setadd1(true)
      let col = document.getElementById("1")
      col.style.background = "red";
      setTimeout(() => {
        let extr = document.getElementById("conteiner1");
        extr.onclick = function (event) {
          if (event.target.tagName === 'BUTTON' && event.target.className === "floating-button down") {
            event.target.className = "down this"
            setSend(true)
          } else if (event.target.tagName === 'BUTTON' && event.target.className === "down this") {
            event.target.className = "floating-button down"
          }
          let alluse = document.querySelectorAll(".this")
          if (alluse.length === 0) setSend(false)
        }
      }, "0");
    }
  }

  function showMe2() {
    if (add2) {
      setadd2(false)
      let col = document.getElementById("2")
      col.style.background = "none";
      setTimeout(() => {
        let alluse = document.querySelectorAll(".this")
        if (alluse.length === 0) setSend(false)
      }, "0");
    }
    else {
      setadd2(true)
      let col = document.getElementById("2")
      col.style.background = "red";
      setTimeout(() => {
        let extr = document.getElementById("conteiner2");
        extr.onclick = function (event) {
          if (event.target.tagName === 'BUTTON' && event.target.className === "floating-button down") {
            event.target.className = "down this"
            setSend(true)
          } else if (event.target.tagName === 'BUTTON' && event.target.className === "down this") {
            event.target.className = "floating-button down"
          }
          let alluse = document.querySelectorAll(".this")
          if (alluse.length === 0) setSend(false)
        }
      }, "0");
    }
  }

  function showMe3() {
    if (add3) {
      setadd3(false)
      let col = document.getElementById("3")
      col.style.background = "none";
      setTimeout(() => {
        let alluse = document.querySelectorAll(".this")
        if (alluse.length === 0) setSend(false)
      }, "0");
    }
    else {
      setadd3(true)
      let col = document.getElementById("3")
      col.style.background = "red";
      setTimeout(() => {
        let extr = document.getElementById("conteiner3");
        extr.onclick = function (event) {
          if (event.target.tagName === 'BUTTON' && event.target.className === "floating-button down") {
            event.target.className = "down this"
            setSend(true)
          } else if (event.target.tagName === 'BUTTON' && event.target.className === "down this") {
            event.target.className = "floating-button down"
          }
          let alluse = document.querySelectorAll(".this")
          if (alluse.length === 0) setSend(false)
        }
      }, "0");
    }
  }

  return (
    <div id="second">
      <h2>
        Вопрос 2:
      </h2>
      <div>
        Как вы оцените работу нашей команды?
      </div>
      <div className="slidecontainer">
        <input type="range" min="0" max="10" value={Inp2} onClick={newQest2} className="slider" id="myRange2" />
        <p>Значение: <span id="demo2"></span></p>
      </div>
      {Passes2
        ? (
          <div>
            <h4>
              Расскажите, пожалуйста, поподробнее, в чём была проблема
            </h4>
            <div id="semi">
              (Можно выбрать несколько вариантов)
            </div>
            <div>
              <div className="variant">
                <button type="click" id="1" class="border-button upper" onClick={showMe1}>Услуги</button>
                {add1
                  ? <div className="tree" id="conteiner1">
                    <button type="click" class="floating-button down" >ЖКХ</button>
                    <button type="click" class="floating-button down" >Интернет</button>
                    <button type="click" class="floating-button down" >Мобильная связь</button>
                    <button type="click" class="floating-button down" >Кредитные карты</button>
                    <button type="click" class="floating-button down" >Вклады</button>
                    <button type="click" class="floating-button down" >Ипотека</button>
                    <button type="click" class="floating-button down" >Текущие счета</button>
                  </div>
                  : <div></div>
                }
              </div>
              <div className="variant">
                <button type="click" id="2" class="border-button upper" onClick={showMe2}>Переводы</button>
                {add2
                  ? <div className="tree" id="conteiner2">
                    <button type="click" class="floating-button down" >Между счетами</button>
                    <button type="click" class="floating-button down" >Обмен валюты</button>
                    <button type="click" class="floating-button down" >По реквизитам</button>
                    <button type="click" class="floating-button down" >Swift</button>
                    <button type="click" class="floating-button down" >QR коды</button>
                    <button type="click" class="floating-button down" >По карте</button>
                    <button type="click" class="floating-button down" >По телефону</button>
                  </div>
                  : <div></div>
                }
              </div>
              <div className="variant">
                <button type="click" id="3" class="border-button upper" onClick={showMe3}>Другое</button>
                {add3
                  ? <div className="tree" id="conteiner3">
                    <button type="click" class="floating-button down" >Настройки</button>
                    <button type="click" class="floating-button down" >О тарифе</button>
                    <button type="click" class="floating-button down" >Тех-поддержка</button>
                  </div>
                  : <div></div>
                }
              </div>
            </div>
          </div>
        )
        : <div></div>
      }
      {Send
        ? <button type="click" class="floating-button down" onClick={lastPage}>Отправить</button>
        : <div></div>
      }
      {ThxPage
      ? <Thx />
      : <div></div>
      }
    </div >

  );
}

export default Qest2;