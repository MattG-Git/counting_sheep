import AvgWidget from "./AvgWidget";
import HistoryWidget from "./HistoryWidget";
import SleepInspoWidget from "./SleepInspoWidget";
import React, { useState } from "react";
import '../styles/style.css';
import {useQuery} from '@apollo/client';
import { QUERY_sleepData } from '../utils/queries';

function Dashboard() {
    const { loading, data } = useQuery(QUERY_sleepData);
    
    const sleepData = data?.sleepData || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    const sleepHours = sleepData.map((sleep) => sleep.hours);

    const sleepHoursSum = sleepHours.reduce((a, b) => a + b, 0);

    const sleepHoursAvg = sleepHoursSum / sleepHours.length;

    const sleepHoursAvgRounded = Math.round(sleepHoursAvg * 10) / 10;

    console.log(sleepHoursAvgRounded);
    console.log(sleepData);
    return (
        <div>
            {/* WOULD BE NICE TO PERSONALIZE THE HEADER WITH LOGIN NAME INSTEAD OF JUST "YOUR" */}
            <h1>Your Counting Sheep Dashboard</h1>
            <AvgWidget sleepAverage={sleepHoursAvgRounded}/>
            <div className="d-grid gap-2 m-4">
              <button className="btn btn-warning btn-lg custom" type="button" onClick={()=> window.location.href="/track"}>Track Sleep</button>
            </div>
            {/* Pass sleep data to history widget */}
            <HistoryWidget/>
            <SleepInspoWidget />
        </div>
    );
}

export default Dashboard;

{/* <div className="col">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">XX/XX/XXXX</h5>
    <p className="card-text">Time Slept: X hours XX minutes</p>
    <p className="card-text">Quality of Sleep: Counted all the sheep 🐑 🐑 🐑</p>
  </div>
</div>
</div> */}