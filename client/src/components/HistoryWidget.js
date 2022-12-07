import React, {useState} from "react";
import {useQuery} from '@apollo/client';
import { QUERY_sleepData } from '../utils/queries';

function HistoryWidget() {
    const { loading, data } = useQuery(QUERY_sleepData);
    
    const sleepData = data?.sleepData || [];

    if (loading) {
        return <div>Loading...</div>;
    }
    // map over results to display each sleep entry
    return (
        sleepData.map((sleep) => (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{sleep.date}</h5>
                <p className="card-text">Time Slept: {sleep.hours} hours</p>
                <p className="card-text">Quality of Sleep: {sleep.quality}</p>
              </div>
            </div>
          </div>
        ))
    );
}

export default HistoryWidget;