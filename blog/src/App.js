/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['곱창 맛집 추천', '운동화 종류', '오늘의 점심']);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [titleNumber, titleNumber변경] = useState(0);
  let [inputValue, inputValue변경] = useState('');

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = '닭발 맛집 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      {글제목.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h3
              onClick={() => {
                titleNumber변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  좋아요변경(좋아요 + 1);
                }}
              >
                💗
              </span>
              {좋아요}
            </h3>
            <p>6월 8일 올림</p>
            <hr />
          </div>
        );
      })}
      {/* <button
        onClick={() => {
          titleNumber변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          titleNumber변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          titleNumber변경(2);
        }}
      >
        버튼3
      </button> */}
      {/* {inputValue}
      <input
        onChange={(e) => {
          inputValue변경(e.target.value);
        }}
      /> */}

      <div className='publish'>
        <input
          onChange={(e) => {
            inputValue변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var arrayCopy = [...글제목];
            arrayCopy.unshift(inputValue);
            글제목변경(arrayCopy);
          }}
        >
          save
        </button>
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        내용확인하기
      </button>
      {modal === true ? <Modal title={글제목} titleNumber={titleNumber} /> : null}
    </div>
  );
}

//app 과 나란히 함수 생성 (component)
function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.title[props.titleNumber]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
