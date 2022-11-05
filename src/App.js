import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

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
                className="form-control mt-1"
                placeholder="Enter flight code"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Flight Date</label>
              <input
                type="date"
                className="form-control mt-1"
                placeholder="Enter flight date"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Flight Time</label>
              <input
                type="time"
                className="form-control mt-1"
                placeholder="Enter flight time"
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
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
