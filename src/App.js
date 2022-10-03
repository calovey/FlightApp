import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
              />
            </div>
            {/* <div className="form-group mt-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Date"
                className="form-control mt-1"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div> */}
            <div className="form-group mt-3">
              <label>Flight Date</label>
              <input
                type="date"
                className="form-control mt-1"
                placeholder="Enter flight date"
              />
            </div>
            <div className="form-group mt-3">
              <label>Flight Time</label>
              <input
                type="time"
                className="form-control mt-1"
                placeholder="Enter flight time"
              />
            </div>
            <div className="form-group mt-3">
              <FormGroup>
                <FormControlLabel
                  //control={<Switch defaultChecked />}
                  control={<Switch />}
                  label="Is it international flight?"
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
