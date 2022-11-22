import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./flightDb.js";
import { useEffect, useState } from "react";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);
  const [flightCode, setFlightCode] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [flightTime, setFlightTime] = useState("");

  const handleSubmit = (event) => {
    const request = indexedDB.open("FlightApp", 1);

    if (flightCode && flightDate && flightTime) {
      request.onsuccess = () => {
        const db = request.result;
      };
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <form className="form">
          <div className="form-content">
            <h3 className="form-title">Flight Time Reminder</h3>
            <hr />
            <div className="form-group mt-3">
              <label>Flight Code</label>
              <input
                type="text"
                name="flightCode"
                className="form-control mt-1"
                placeholder="Enter flight code"
                onChange={(e) => setFlightCode(e.target.value)}
                value={flightCode}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Flight Date</label>
              <input
                type="date"
                name="flightDate"
                className="form-control mt-1"
                placeholder="Enter flight date"
                onChange={(e) => setFlightDate(e.target.value)}
                value={flightDate}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Flight Time</label>
              <input
                type="time"
                name="flightTime"
                className="form-control mt-1"
                placeholder="Enter flight time"
                onChange={(e) => setFlightTime(e.target.value)}
                value={flightTime}
                required
              />
            </div>
            <div className="form-group mt-3">
              <FormGroup>
                <FormControlLabel
                  control={<Switch />}
                  label="Is it international flight?"
                  required
                />
              </FormGroup>{" "}
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-dark"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
