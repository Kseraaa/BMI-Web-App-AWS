import { Box, Card, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { db } from '../Home/firebase'
import './AnalyzeCard.css'

function Analyze() {

  useEffect(() => {
    db.collection('bmiform').onSnapshot(snapshot => {
      setData(snapshot.docs.map(doc => ({
        id: doc.id,
        bmi: doc.data().BMI,
        gender: doc.data().gender,
        height: doc.data().height,
        weight: doc.data().weight,
      })))
    })
  }, []);

  const [data, setData] = useState([]);

  // Average BMI
  let length = data.length;
  let totalBMI = 0;
  let totalMale = 0;
  let totalFemale = 0;

  for (let i = 0; i < length; i++) {
    totalBMI += Number(data[i].bmi);
  };

  let avgBMI = (totalBMI / length).toFixed(2);

  // Average Height
  let totalHeight = 0;
  for (let i = 0; i < length; i++) {
    totalHeight += Number(data[i].height);
  };
  let avgHeight = (totalHeight / length).toFixed(2);

  // Average Weight
  let totalWeight = 0;
  for (let i = 0; i < length; i++) {
    totalWeight += Number(data[i].weight);
  };
  let avgWeight = (totalWeight / length).toFixed(2);

  //Average Male and Female BMI 
  let totalMaleBMI = 0;
  let totalFemaleBMI = 0;
  for (let i = 0; i < length; i++) {
    if (data[i].gender === "Male") {
      totalMaleBMI += Number(data[i].bmi);
      totalMale += 1;
    } else if (data[i].gender === "Female") {
      totalFemaleBMI += Number(data[i].bmi);
      totalFemale += 1;
    }
  };
  let avgMaleBMI = (totalMaleBMI / totalMale).toFixed(2);
  let avgFemaleBMI = (totalFemaleBMI / totalFemale).toFixed(2);

  //Average Male and Female Height 
  let totalMaleHeight = 0;
  let totalFemaleHeight = 0;
  for (let i = 0; i < length; i++) {
    if (data[i].gender === "Male") {
      totalMaleHeight += Number(data[i].height);
    } else if (data[i].gender === "Female") {
      totalFemaleHeight += Number(data[i].height);
    }
  };
  let avgMaleHeight = (totalMaleHeight / totalMale).toFixed(2);
  let avgFemaleHeight = (totalFemaleHeight / totalFemale).toFixed(2);

  //Average Male and Female Weight
  let totalMaleWeight = 0;
  let totalFemaleWeight = 0;
  for (let i = 0; i < length; i++) {
    if (data[i].gender === "Male") {
      totalMaleWeight += Number(data[i].weight);
    } else if (data[i].gender === "Female") {
      totalFemaleWeight += Number(data[i].weight);
    }
  };
  let avgMaleWeight = (totalMaleWeight / totalMale).toFixed(2);
  let avgFemaleWeight = (totalFemaleWeight / totalFemale).toFixed(2);


  console.log("Average BMI : ", avgBMI);
  console.log("Average Male BMI : ", avgMaleBMI);
  console.log("Average Female BMI : ", avgFemaleBMI);
  console.log("");
  console.log("Average Height :", avgHeight);
  console.log("Average Male Height :", avgMaleHeight);
  console.log("Average Female Height :", avgFemaleHeight);
  console.log("");
  console.log("Average Weight :", avgWeight);
  console.log("Average Male Weight :", avgMaleWeight);
  console.log("Average Female Weight :", avgFemaleWeight);


  return (
    <div>
      <Box
        sx={{
          display: 'block',
          flexDirection: 'row',
          // border: '1px dashed grey',
          align: "center",
          background: 'linear-gradient(#dfe2e8  90%)',
          mx: 2,
          mt: 2,
          mb: 2,
          p: 40,
          pt: 2,
          pb: 2,
        }}
      >

        {/* Card1 BMI เฉลี่ย */}
        <Box>
          <Card sx={{ p: 2.38, paddingRight: 20, mt: 2 , borderRadius:'2rem'}}>
            <div className='row'>
              <table width="100%">
                <tr>
                  <td>
                    <Container maxWidth="auto">
                      <div className='headerC1'>
                        <div>BMI เฉลี่ย</div>
                      </div>
                    </Container>
                  </td>

                  <td>
                    <Container maxWidth="auto">
                      <div className='number'>
                        <div>{avgBMI} kg/m</div>
                      </div>
                    </Container>
                  </td>
                </tr>
              </table>
            </div>
          </Card>

          {/* Card2 ส่วนสูง */}
          <Card sx={{ p: 2.38, paddingRight: 20, mt: 2 ,borderRadius:'2rem'}}>
            <table width="100%">
              <tr>
                <td>
                  <Container maxWidth="auto">
                    <div className='headerC1'>
                      <div>ส่วนสูงเฉลี่ย
                      </div>

                    </div>
                  </Container>
                </td>

                <td>
                  <Container maxWidth="auto">
                    <div className='number'>
                      <div>{avgHeight} cm.</div>
                    </div>
                  </Container>
                </td>
              </tr>
            </table>
          </Card>

          <Card sx={{ p: 2.38, paddingRight: 20, mt: 2,borderRadius:'2rem' }}>
            <table width="100%">
              <tr>
                <td>
                  <Container maxWidth="auto">
                    <div className='headerC1'>
                      <div>น้ำหนักเฉลี่ย</div>
                    </div>
                  </Container>
                </td>

                <td>
                  <Container maxWidth="auto">
                    <div className='number'>
                      <div>{avgWeight} kg.</div>
                    </div>
                  </Container>
                </td>
              </tr>
            </table>
          </Card>
        </Box>
        {/* ค่าเฉลี่ยผู้ชาย */}
      <Card sx={{ p: 2.38, mt: 3, borderRadius:'2rem'}}>
        <div className='detail'>
          <table width="100%">
            <tr>
              <td>
                <Container maxWidth="auto">
                  <div className='headerC2'>
                    <div>ผู้ชาย</div>
                  </div>

                  <br />
                  <div className='detail'>BMI เฉลี่ย
                    <br />ส่วนสูงเฉลี่ย
                    <br />น้ำหนักเฉลี่ย
                  </div>
                </Container>
              </td>

              <td>
                <Container maxWidth="auto">
                  <br />
                  <br />
                  <div className='detail'>{avgMaleBMI} kg/m
                    <br />{avgMaleHeight} cm
                    <br />{avgMaleWeight} kg
                  </div>
                </Container>
              </td>

              {/* ค่าเฉลี่ยผู้หญิง */}
              <td>
                <Container maxWidth="auto">
                  <div className='headerC2'>
                    <div>ผู้หญิง</div>
                  </div>

                  <br />
                  <div className='detail'>BMI เฉลี่ย
                    <br />ส่วนสูงเฉลี่ย
                    <br />น้ำหนักเฉลี่ย
                  </div>
                </Container>
              </td>

              <td>
                <Container maxWidth="auto">
                  <br />
                  <br />
                  <div className='detail'>{avgFemaleBMI} kg/m</div>
                  <div>{avgFemaleHeight} cm
                    <br />{avgFemaleWeight} kg
                  </div>
                </Container>
              </td>
            </tr>
          </table>
        </div>
      </Card>
      </Box>

    </div >

  )
}

export default Analyze