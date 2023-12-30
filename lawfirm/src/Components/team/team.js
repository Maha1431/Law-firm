import React from 'react';
import styles from '../team/team.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image1 from "../../assests/teammembers/img1.png";
import image2 from "../../assests/teammembers/img2.png";
import image3 from "../../assests/teammembers/img3.png";
import image4 from "../../assests/teammembers/img4.png";
import image5 from "../../assests/teammembers/img5.png";
import image6 from "../../assests/teammembers/img6.png";

function Team()
{ 
    return (
        <Box className={styles.box}>
            <h1 style={{ marginBottom: '100px' }}>Our Team</h1>
          <Grid container spacing={3} >
            
               <Grid item xs={4} className={styles.grid} >
                <Grid container direction="Coloum"  >
               <img src={image1} alt=',,,,'/>
               <div >
               <h4 className={styles.text}>Danial Def</h4>
               <p className={styles.para}>301 Cases</p>
               </div>
               </Grid>
             </Grid>

             <Grid item xs={4} style={{ backgroundColor: ' #E3B748', borderRadius:'14px' , color:'#111111'}} className={styles.grid} >
             <Grid container direction="Coloum" >
               <img src={image2} alt=',,,,'/>
               <div >
               <h4 className={styles.text} >Sanfole</h4>
               <p  className={styles.para}>850 Cases</p>
               </div>
             </Grid>
             </Grid>

             <Grid item xs={4} className={styles.grid} >
             <Grid container direction="Coloum" >
               <img src={image3} alt=',,,,'/>
               <div >
               <h4 className={styles.text}>Cesforila</h4>
               <p  className={styles.para}>470 Cases</p>
               </div>
             </Grid>
             </Grid>
             <Grid item xs={4} sx={{ marginBottom: 6 }} className={styles.grid} >
             <Grid container direction="Coloum" >
               <img src={image4} alt=',,,,'/>
               <div>
               <h4  className={styles.text}>Colleen</h4>
               <p  className={styles.para}>180 Cases</p>
               </div>
               </Grid>
             </Grid>

             <Grid item xs={4} sx={{ marginBottom: 6 }} className={styles.grid} >
             <Grid container direction="Coloum" >
               <img src={image5} alt=',,,,'/>
               <div >
               <h4 className={styles.text}>Haldone</h4>
               <p  className={styles.para}>212 Cases</p>
               </div>
             </Grid>
             </Grid>
             <Grid item xs={4} sx={{ marginBottom: 6 }} className={styles.grid} >
             <Grid container direction="Coloum" >
               <img src={image6} alt=',,,,'/>
               <div >
               <h4 className={styles.text}>Nik Jeo</h4>
               <p  className={styles.para}>350 Cases</p>
               </div>
             </Grid>
             </Grid>
          </Grid>
        </Box>
    );
}
export default Team;