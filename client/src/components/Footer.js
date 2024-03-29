import React from 'react';

export default function Footer() {
  return (
    <div className="container position-absolute top-100 start-50 translate-middle">
      <div className="row">
        <div className="col">
          <p>Counting Sheep</p>
        </div>
        <div className="col">
          <img src="./assets/cs_logo_2.svg" id="logo" alt="Logo"></img>
        </div>
        <div className="col">
        <p>ⓒ 2022</p>
        </div>
      </div>
    </div>
  );
}