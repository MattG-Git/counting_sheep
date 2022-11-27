import React from "react";

function HistoryWidget() {
  
// const data = []; 

  return (
    <div className="container">
      <h3>Your Sleep History</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* THIS IS HOW I WAS THINKING WE WOULD DYNAMICALLY DISPLAY A CARD FOR EACH HISTORY OBJECT IN THE DATBASE */}
      {/* {data.map((history)=> {
        return(
          <div className="col">
            <div className="card" key={history._id}>
              <div className="card-body">
                <h5 className="card-title">{history.date}</h5>
                <p className="card-text">Time Slept: {history.hourSlept} hours {history.minuteSlept} minutes</p>
                <p className="card-text">Quality of Sleep: {history.qualitySlept}</p>
             </div>
          </div>
        </div>
        )
      })} */}
      {/* THIS IS DUMMY DATA JUST TO DISPLAY THE CARD WHILE BUILDING COMPONENT */}
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">XX/XX/XXXX</h5>
              <p className="card-text">Time Slept: X hours XX minutes</p>
              <p className="card-text">Quality of Sleep: Counted all the sheep 🐑 🐑 🐑</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">XX/XX/XXXX</h5>
              <p className="card-text">Time Slept: X hours XX minutes</p>
              <p className="card-text">Quality of Sleep: Only able to count a few 🐑 🐑</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">XX/XX/XXXX</h5>
              <p className="card-text">Time Slept: X hours XX minutes</p>
              <p className="card-text">Quality of Sleep: Missed the whole herd 🐑</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryWidget;