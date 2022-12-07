import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ADD_SLEEP} from '../utils/mutations';
import {useMutation} from '@apollo/client';
import Auth from '../utils/auth';

function TrackForm() {
    const [addSleep, {error}] = useMutation(ADD_SLEEP);
    const navigate = useNavigate();
    const [dateState, setDateState] = useState({month: '', day: '', year: ''});
    const [timeState, setTimeState] = useState({startHour: '', startMinute: '', startAmPm: '', endHour: '', endMinute: '', endAmPm: ''});
    const [qualityState, setQualityState] = useState({quality: ''});

    const handleDateChange = (event) => {
        const {name, value} = event.target;
        setDateState({
            ...dateState,
            [name]: value
        });
    };

    const handleTimeChange = (event) => {
        const {name, value} = event.target;
        setTimeState({
            ...timeState,
            [name]: value
        });
    };
    
    const handleQualityChange = (event) => {
        const {name, value} = event.target;
        setQualityState({
            ...qualityState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const date = `${dateState.month}/${dateState.day}/${dateState.year}`;
        const startHour = parseInt(timeState.startHour);
        const startMinute = parseInt(timeState.startMinute);
        const endHour = parseInt(timeState.endHour);
        const endMinute = parseInt(timeState.endMinute);
        const startAmPm = timeState.startAmPm;
        const endAmPm = timeState.endAmPm;
        const quality = qualityState.quality;
        let hours = 0;
        // determine hours of sleep
        if (startAmPm === 'PM' && endAmPm === 'AM') {
            hours = (endHour + 12) - (startHour);
        } else if (startAmPm === 'PM' && endAmPm === 'PM') {
            hours = (endHour) - (startHour);
        } else if (startAmPm === 'AM' && endAmPm === 'AM') {
            hours = endHour - startHour;
        } else if (startAmPm === 'AM' && endAmPm === 'PM') {
            hours = (endHour + 12) - startHour;
        }
        // determine minutes of sleep
        console.log(hours)
        if (startMinute > endMinute) {
            hours -= 1;
        }

        
        console.log(date, hours, quality)
        try {
            const {data} = await addSleep({
                variables: {date, hours, quality,
                user: (Auth.getProfile().data._id).split(' ').pop().trim()}
            });
            console.log(data);
            navigate('/');
        }
        catch (err) {
            console.error(err);
        }
    };
        
    return(
        <div className="container m-5">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlfor="date" className="form-label">Date</label>
                        <div className="input-group p-1 mb-4">
                            <select className="form-select" name="month" onChange={handleDateChange}>
                                <option selected>Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select className="form-select" name='day' onChange={handleDateChange}>
                                <option selected>Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select className="form-select" name='year' onChange={handleDateChange}>
                                <option selected>Year</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <label htmlFor="startTime" className="form-label">Sleep Start Time</label>
                        <div className="input-group p-1 mb-4">
                            <select className="form-select" name='startHour' onChange={handleTimeChange}>
                                <option selected>Hour</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select className="form-select" name='startMinute' onChange={handleTimeChange}>
                                <option selected>Minute</option>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                            <select className="form-select" name='startAmPm' onChange={handleTimeChange}>
                                <option selected>AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                        <label for="endTime" className="form-label">Sleep End Time</label>
                            <div className="input-group mb-4 p-1">
                                <select className="form-select" name='endHour' onChange={handleTimeChange}>
                                    <option selected>Hour</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select className="form-select" name='endMinute' onChange={handleTimeChange}>
                                    <option selected>Minute</option>
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                                <select className="form-select" name='endAmPm' onChange={handleTimeChange}>
                                    <option selected>AM/PM</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        <label for="quality" className="form-label">Quality of Sleep</label>
                        <div className="input-group p-1"></div>
                            <select className="form-select" name='quality' onChange={handleQualityChange}>
                                <option selected>Quality</option>
                                <option value="Missed the whole herd 🐑">Missed the whole herd 🐑</option>
                                <option value="Only able to count a few 🐑 🐑">Only able to count a few 🐑 🐑</option>
                                <option value="Counted all the sheep 🐑 🐑 🐑">Counted all the sheep 🐑 🐑 🐑</option>
                            </select>
                            <button className="btn btn-warning m-5" type="submit">Track Sleep</button>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default TrackForm;