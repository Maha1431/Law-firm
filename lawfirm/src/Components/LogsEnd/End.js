import React from "react";
import styles from '../LogsEnd/End.module.css';
import Box from "@mui/material/Box";
import logo from '../../assests/logo.png';
import header from "../../assests/header.png";
import icons from "../../assests/icons.png"


function End()
{
    return(
        <Box className={styles.box}>
         <div>
            <img src={logo} alt="logo" className={styles.logo} />
         </div>
         <div className={styles.card}>
         <img src={header} alt='pages' className={styles.header} />
         <img src={icons} alt='pages' className={styles.icons} />
         <div className={styles.text}>
            <p>© 2020 Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
         </div>
         </div>
        </Box>
    );
}
export default End;