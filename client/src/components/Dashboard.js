import AvgWidget from "./AvgWidget";
import HistoryWidget from "./HistoryWidget";
import SleepInspoWidget from "./SleepInspoWidget";
import React, { useState } from "react";
import '../styles/style.css';

function Dashboard() {
    const [sleepAverage, setSleepAverage] = useState(0);
  return (
    <div>
        {/* WOULD BE NICE TO PERSONALIZE THE HEADER WITH LOGIN NAME INSTEAD OF JUST "YOUR" */}
        <h1>Your Counting Sheep Dashboard</h1>
        <AvgWidget sleepAverage={sleepAverage} setSleepAverage={setSleepAverage}/>
        <div className="d-grid gap-2 m-4">
          <button className="btn btn-warning btn-lg custom" type="button" onClick={()=> window.location.href="/track"}>Track Sleep</button>
        </div>
        <HistoryWidget />
        <SleepInspoWidget />
    </div>
  )
}

export default Dashboard;
