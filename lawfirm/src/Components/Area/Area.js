import React from 'react';
import styles from '../Area/Area.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import img1 from '../../assests/firstRec.png';
import img2 from '../../assests/secondRec.png';
import img3 from '../../assests/thirdRec.png';
import img4 from '../../assests/img4.png';
import img5 from '../../assests/Fifth.png';
import img6 from '../../assests/sixth.png'


function GridofCards()
{
  return(
    <Box className={styles.box} >
      <h1>Area of Practices</h1>
      <Grid container spacing={2} className={styles.grid}>
        <Grid item xs={8}>
          <img src={img1} alt='....' />
          <a href='/' className={styles.text}>BUSINESS LAW</a>
        </Grid>
        <Grid item xs={4}>
        <img src={img2} alt='....' />
        <a href='/' className={styles.text1}>PartnershipLAW</a>
        </Grid>
        <Grid item xs={4}>
        <img src={img3} alt='....' />
        <a href='/' className={styles.text2}>REAL ESTATE LAW</a>
        </Grid>
        <Grid item xs={8}>
        <img src={img4} alt='....' />
        <a href='/' className={styles.text3}>BUSINESS LAW</a>
        </Grid>
        <Grid item xs={8}>
          <img src={img5} alt='....' />
          <a href='/' className={styles.text4}>LANDLORD DISPUTES</a>
        </Grid>
        <Grid item xs={4}>
        <img src={img6} alt='....' />
        <a href='/' className={styles.text5}>ELDERABUSE</a>
        </Grid>
      </Grid>
    </Box>
  );

}
export default GridofCards;