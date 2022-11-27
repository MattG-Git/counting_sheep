import React from "react";

function AvgWidget(props) {
  return (
    <div className="container">
        <div className="row">
          <div className="col">
            {/* ADD STYLING POSSIBLY A BOOTSTRAP CARD */}
            <h2>You have slept {props.sleepAverage} hours on average</h2>
          </div>
        </div>
    </div>
  )
}

export default AvgWidget;