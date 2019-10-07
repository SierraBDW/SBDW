import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// import FormHelperText from "@material-ui/core/FormHelperText";

const Admin = () => {
  return (
    <>
      <div className="new-client-form">
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

      <div className="new-employee-form">
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
    </>
  );
};

export default Admin;
