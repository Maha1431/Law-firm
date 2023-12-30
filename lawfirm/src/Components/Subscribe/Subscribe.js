import React  from "react";
import styles from '../Subscribe/Subscribe.module.css';
import Box from "@mui/material/Box";


function Subscribe()
{
    return(
        <Box className={styles.Box}>
          <div className={styles.box1}>
            <h1>Subscribe our Newsletter</h1>
            <form className={styles.form}>
                <input  className={styles.name} type="text" placeholder="Name:" />
                <input  className={styles.email} type="text" placeholder="Enter your Email:" />
                <button className={styles.btn}>SEND</button>
            </form>
          </div>
        </Box>
    );
}
export default Subscribe;