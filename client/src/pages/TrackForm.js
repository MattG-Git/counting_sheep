import React from 'react';

function TrackForm() {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <label for="date" className="form-label">Date</label>
                        <div className="input-group">
                            <select className="form-select">
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
                            <select className="form-select">
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
                            <select className="form-select">
                                <option selected>Year</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <label for="time" className="form-label">Sleep Start Time</label>
                        <div className="input-group">
                            <select className="form-select">
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
                            <select className="form-select">
                                <option selected>Minute</option>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="am" id="amRadioStart"></input>
                                <label className="form-check-label" for="am">
                                    AM
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="pm" id="pmRadioStart"></input>
                                <label className="form-check-label" for="pm">
                                    PM
                                </label>
                            </div>
                        </div>
                        <label for="time" className="form-label">Sleep End Time</label>
                            <div className="input-group">
                                <select className="form-select">
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
                                <select className="form-select">
                                    <option selected>Minute</option>
                                    <option value="00">00</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </select>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="am" id="amRadioEnd"></input>
                                    <label className="form-check-label" for="am">
                                        AM
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="pm" id="pmRadioEnd"></input>
                                    <label className="form-check-label" for="pm">
                                        PM
                                    </label>
                                </div>
                            </div>
                        <label for="quality" className="form-label">Quality of Sleep</label>
                        <div className="input-group"></div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sleep" id="goodSleep"></input>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Counted all the sheep 🐑 🐑 🐑
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sleep" id="okSleep"></input>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Only able to count a few 🐑 🐑
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="sleep" id="badSleep"></input>
                                <label className="form-check-label" for="flexRadioDefault3">
                                    Missed the whole herd 🐑
                                </label>
                            </div>
                            <button className="btn btn-primary" type="submit">Track Sleep</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default TrackForm;