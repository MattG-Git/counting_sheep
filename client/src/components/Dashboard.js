import AvgWidget from "./AvgWidget";
import HistoryWidget from "./HistoryWidget";
import SleepInspoWidget from "./SleepInspoWidget";

import React, { useState } from "react";

function Dashboard() {
    const [sleepAverage, setSleepAverage] = useState(0);
  return (
    <div>
        {/* WOULD BE NICE TO PERSONALIZE THE HEADER WITH LOGIN NAME INSTEAD OF JUST "YOUR" */}
        <h1>Your Counting Sheep Dashboard</h1>
        <AvgWidget sleepAverage={sleepAverage} setSleepAverage={setSleepAverage}/>
        <button className="btn btn-primary">Track Sleep</button>
        <HistoryWidget />
        <SleepInspoWidget />
    </div>
  )
}

export default Dashboard;
