import React from "react";

function AvgWidget(props) {
  return (
    <div className="container mt-4 mb-4 p-3">
        <div className="row ">
          <div className="col">
              <div className="card">
                <div className="card-body">
                  {/* ADD STYLING POSSIBLY A BOOTSTRAP CARD */}
                  <h2 className="card-text">You have slept {props.sleepAverage} hours on average</h2>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AvgWidget;
