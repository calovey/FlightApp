import * as React from "react";
//import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState, useEffect } from "react";
import setupIndexedDB, { useIndexedDBStore } from "use-indexeddb";

const idbConfig = {
  databaseName: "FlightApp",
  version: 2,
  stores: [
    {
      name: "flights",
      id: { keyPath: "id", autoIncrement: true }
    },
  ],
};

function FormHandle() {
  const [flightCode, setFlightCode] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [flightTime, setFlightTime] = useState("");

  useEffect(() => {
    setupIndexedDB(idbConfig)
      .then(() => console.log("success"))
      .catch(e => console.error("An error occurred with IndexedDB", e));
  }, []);

  const { add } = useIndexedDBStore("flights");

  function insert({ flightCode, flightDate,flightTime }) {
    add({ flightCode, flightDate, flightTime }).then(console.log);
  }

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
              <button className="btn btn-dark" onClick={() => insert({ flightCode, flightDate,flightTime })}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormHandle;