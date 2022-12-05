import AvgWidget from "./AvgWidget";
import HistoryWidget from "./HistoryWidget";
import SleepInspoWidget from "./SleepInspoWidget";
import React, { useState } from "react";
import '../styles/style.css';
import {useQuery} from '@apollo/client';
import { QUERY_sleepData } from '../utils/queries';

function Dashboard() {
    const [sleepAverage, setSleepAverage] = useState(0);
    const { loading, data } = useQuery(QUERY_sleepData);
    
    const sleepData = data?.sleepData || [];
    console.log(sleepData);
    console.log(sleepAverage);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* WOULD BE NICE TO PERSONALIZE THE HEADER WITH LOGIN NAME INSTEAD OF JUST "YOUR" */}
            <h1>Your Counting Sheep Dashboard</h1>
            <AvgWidget sleepData={sleepData} sleepAverage={sleepAverage} setSleepAverage={setSleepAverage}/>
            <div className="d-grid gap-2 m-4">
              <button className="btn btn-warning btn-lg custom" type="button" onClick={()=> window.location.href="/track"}>Track Sleep</button>
            </div>
            {/* Pass sleep data to history widget */}
            <HistoryWidget sleepData={sleepData} sleepAverage={sleepAverage} setSleepAverage={setSleepAverage}/>
            <SleepInspoWidget />
        </div>
    );
}

export default Dashboard;
