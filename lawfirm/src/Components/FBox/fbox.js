import React from "react";
import styles from "../../Components/FBox/fbox.module.css";
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';

function Box() {
    const useStyles = {
        divider: {
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Set the color to white
          // Add other styles if needed
        
        },
      };


  return (
    <div className={styles.container}>
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem style={useStyles.divider} />}>
        <div className={styles.heading}><h1>Let's Introduce  Ourself</h1></div>
        <div className={styles.content}><h3 className={styles.head} >Criminal Lawyer</h3>
        <p className={styles.para}>
          Amet minim mollit non deserunt ullamco est <br/> sit aliqua dolor do amet
          sint. Velit officia consequatduis<br /> enim velit mollit Exercitation.
        </p></div>       
      </Stack>
      {/* <div className={styles.heading}>
        <h1>Let's Introduce <br /> Ourself</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.head}><h3 >Criminal Lawyer</h3></div>
        
        <p className={styles.para}>
          Amet minim mollit non deserunt ullamco est <br/> sit aliqua dolor do amet
          sint. Velit officia consequatduis<br /> enim velit mollit Exercitation.
        </p>
      </div> */}
    </div>
  );
}
export default Box;
