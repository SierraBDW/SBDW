import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import "./admin.scss";
// import axios from "axios";
// import FormHelperText from "@material-ui/core/FormHelperText";

const Admin = () => {
  return (
    <div className="forms">
      <div className="new-client-form">
        <div>
          <div className="new-client=title">
            <h2>New Client Entry</h2>
          </div>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Pet Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Emergency Contact</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
      </div>

      <div className="new-employee-form">
        <div className="New Employee Entry">
          <h2>New Employee Entry</h2>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Pet Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Emergency Contact</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Admin;
