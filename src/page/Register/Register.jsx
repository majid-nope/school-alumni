import React, { useRef, useState } from "react";
import style from "./SignUp.module.scss";
import { Button, Select, TextInput } from "@mantine/core";
// import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,


  Radio,
  RadioGroup,


} from "@mui/material";


import { PhotoCamera } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";


import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import {  validate } from "../../utils/validations";
import { DatePicker } from "@mantine/dates";
import { register } from "../../redux/async-operations/auth";
import { useDispatch } from "react-redux";

const SignUp = () => {


  const onMedia = useMediaQuery('(min-width: 831px)');
  const dispatch = useDispatch()


  const [field, setField] = useState({ class: 7 });
  const [dpPath, setDp] = useState(false);
  const [errorField, setError] = useState([])
  const formRef = useRef()
  const years = [];
  for (let i = 1927; i <= new Date().getFullYear(); i++) {
    years.push(String(i))
  }






  const onChange = (e, dates) => {
    if (e) {
      console.log(e);

      setField({ ...field, [e.target.name]: e.target.value });
    }
    if (dates) {
      setField({ ...field, [dates.name]: dates.value });
      console.log(dates);
    }





  };

  const onRegister = (e) => {

    validate(field).then((error) => {

      console.log(error);
      if (!error.length) {


        delete field.undefined;
        const form = new FormData();

        for (let item in field) {
          form.append(item, field[item]);
        }

        dispatch(register(form));

      } else {
        setError(error)

      }




    })



  };

  const setPic = (e) => {
    console.log(e.files);
    // const file = new FileReader()
    // file.readAsDataURL(e.target.value)

    setDp(URL.createObjectURL(e.target.files[0]));
    setField({ ...field, file: e.target.files[0] });
  };

  return (
    <div className={style.container}>
      <form action="" method="post" style={{ scale: onMedia ? "1" : "0.7" }} ref={formRef}>
        <h1>GMUPS CHIRAYIL</h1>


        <TextInput
          error={errorField.includes('name') ? "please enter your name" : false}
          required
          name="name"
          placeholder="Your name"
          label="Full Name"
          withAsterisk
          onChange={onChange}
        />


        <TextInput
          error={errorField.includes('phone') ? "Enter proper phone no" : false}

          required
          name="phone"
          placeholder="Phone"
          label="Phone no"
          withAsterisk
          onChange={onChange}
        />
        <TextInput

          name="parentName"
          placeholder="Name"
          label="Parent Name"

          onChange={onChange}
        />



        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 50px 0 50px",
            gap: "12px",
          }}
        >


          <Select
            error={errorField.includes('passOut') ? "please select" : false}
            label="Pass Out"
            placeholder="year"
            onChange={(e => setField({ ...field, passOut: e }))}
            data={years.reverse().map((el) => ({ value: el, label: el }))}
          />
          <Select
            label="Class"
            placeholder="class"
            onChange={(e => setField({ ...field, class: e }))}
            data={Array(7).fill().map((_, index) => ({ value: index + 1, label: index + 1 }))}
          />
          <Select
            label="Division"
            placeholder="Division"
            onChange={(e => setField({ ...field, division: e }))}
            data={[
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
              { value: "D", label: "D" },
              { value: "E", label: "E" },
              { value: "F", label: "F" },
              { value: "G", label: "G" },
              { value: "H", label: "H" }
            ]}
          />

        </div>


        <DatePicker onChange={(e) => setField({ ...field, DoB: e?.toLocaleDateString() ? e?.toLocaleDateString() : "" })} placeholder="Date of Birth" label="DoB" />

        <TextInput

          name="email"
          placeholder="Email"
          label="Email"

          onChange={onChange}
        />





        <TextInput

          label="Job"
          name="job"
          placeholder="Name"

          onChange={onChange}
        />


        <TextInput

          label="Address"
          name="address"
          placeholder="Your address"

          onChange={onChange}
        />


        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={onChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ alignItems: "center" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Choose your photo
          </FormLabel>

          {dpPath ? (
            <>
              <img width="50px" src={dpPath} alt="upload" />
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => setDp(false)}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </>
          ) : (
            <IconButton
              sx={{ color: "#1e1e1e", aspectRatio: "1/1" }}
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" onChange={setPic} />
              <PhotoCamera />
            </IconButton>
          )}
        </FormControl>
        <Button onClick={onRegister}>Join</Button>

        Have an account? <Link style={{ color: "rgb(0 177 255)" }} to={"/login"}>Log In</Link>
      </form>
    </div>
  );
};

export default SignUp;
