import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import "./admin.scss";
import axios from "axios";
// import FormHelperText from "@material-ui/core/FormHelperText";

const Admin = () => {
  const [clientValues, setClientValues] = useState({
    name: "",
    phone: "",
    petName: "",
    eContact: "",
    email: ""
  });
  const [employeeValues, setEmployeeValues] = useState({
    name: "",
    phone: "",
    petName: "",
    eContact: "",
    email: ""
  });

  const handleClientChange = key => e => {
    setClientValues({ ...clientValues, [key]: e.target.value });
  };
  const handleEmployeeChange = key => e => {
    setEmployeeValues({ ...employeeValues, [key]: e.target.value });
  };

  return (
    <div className="forms">
      <form
        onSubmit={event => {
          console.log(clientValues);
          event.preventDefault();
          axios
            .post("http://localhost:5000/clientValues", clientValues)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }}
        className="new-client-form"
      >
        <div>
          <div className="new-client=title">
            <h2>New Client Entry</h2>
          </div>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={clientValues.name}
              onChange={handleClientChange("name")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={clientValues.phone}
              onChange={handleClientChange("phone")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Pet Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={clientValues.petName}
              onChange={handleClientChange("petName")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Emergency Contact</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={clientValues.eContact}
              onChange={handleClientChange("eContact")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={clientValues.email}
              onChange={handleClientChange("email")}
            />
          </FormControl>
        </div>
        <button type="submit">Submit</button>
      </form>

      <form
        onSubmit={event => {
          console.log(employeeValues);
          event.preventDefault();
           axios
            .post("/employeeValues", clientValues)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }}
        className="new-employee-form"
      >
        <div className="New Employee Entry">
          <h2>New Employee Entry</h2>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={employeeValues.name}
              onChange={handleEmployeeChange("name")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Phone</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={employeeValues.phone}
              onChange={handleEmployeeChange("phone")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Pet Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={employeeValues.petName}
              onChange={handleEmployeeChange("petName")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Emergency Contact</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={employeeValues.eContact}
              onChange={handleEmployeeChange("eContact")}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={employeeValues.email}
              onChange={handleEmployeeChange("email")}
            />
          </FormControl>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
