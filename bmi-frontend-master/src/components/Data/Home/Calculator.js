import { Card, Grid, Paper, styled } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase";
import './Calculator.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Calculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [BMI, setBMI] = useState('');

  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('bmiform').add({
      height: height,
      weight: weight,
      BMI: BMI,
      gender: gender
    })
      .then(() => {
        alert('Submitted')
      })
      .catch(error => {
        alert(error.message);
      })
  }


  const calculateBMI = () => {
    // Validate input values
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let bmiClass;

    if (bmi < 18.5) {
      bmiClass = "ผอม";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiClass = "น้ำหนักปกติ";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiClass = "อ้วน";
    } else {
      bmiClass = "อ้วนเกินไป";
    }

    if (bmi > 0 && height !== "0" && weight !== "0") {
      setResult(`ค่า BMI ของคุณคือ : ${bmi.toFixed(1)} (${bmiClass})`);
      setBMI(`${bmi.toFixed(1)}`);
    }

    if (height === "" && weight === "") {
      window.alert("คำเตือน: กรุณากรอกส่วนสูงและน้ำหนัก")
    } else if (weight === "") {
      window.alert("คำเตือน: กรุณากรอกน้ำหนัก")
    } else if (weight === "") {
      window.alert("คำเตือน: กรุณากรอกส่วนสูง")
    } else if (height === "0" && weight === "0") {
      window.alert("คำเตือน: กรุณาตรวจสอบส่วนสูงและน้ำหนัก")
    } else if (weight === "0") {
      window.alert("คำเตือน: กรุณาตรวจสอบน้ำหนัก")
    } else if (height === "0") {
      window.alert("คำเตือน: กรุณาตรวจสอบส่วนสูง")
    }
  }
  return (

    <form className="form" onSubmit={handleSubmit}>
      <Card sx={{ mr: '30rem', ml: '30rem', mt: '26rem', bgcolor: '#4db6ac', borderRadius: '5rem', position: 'relative' }}>
        <div className="App">
          <div className="container">
            <Card sx={{ mr: '5rem', ml: '5rem', borderRadius: '2rem', textAlign: 'center', padding: '3rem', bgcolor: '#ffd54f' }}>
              <label htmlFor="weight" >เพศ (Gender)</label>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Item>
                    <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /><br />เพศชาย ( Male )
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /><br />เพศหญิง ( Female )
                  </Item>
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ textAlign: 'center', padding: '3rem', borderRadius: '2rem', mr: '5rem', ml: '5rem', mt: '3rem', mb:'1rem', bgcolor: '#ffd54f' }}>
              <label htmlFor="height">ส่วนสูง (cm)</label><br />
              <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} min="100" max="250" required placeholder="กรอกส่วนสูงของท่าน" /><br />

              <label htmlFor="weight">น้ำหนัก (kg)</label><br />
              <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} min="20" max="200" required placeholder="กรอกน้ำหนักของท่าน" /><br />

              <button type="submit" onClick={calculateBMI} >Calculate BMI</button>
              <div id="result">{result}</div>
            </Card>
          </div>
        </div>
      </Card>
    </form>
  );
}

export default Calculator;
