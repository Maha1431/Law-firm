import React from 'react';
import styles from '../../Components/LawFirm/Lawfrim.module.css';
import logo from "../../assests/logo.png";
import header from "../../assests/header.png";
import photo from "../../assests/photo.png";
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';

function LawFrim()
{
   return(
   <div className={styles.Box}>
    <div className={styles.nBox}>
    <div className={styles.header}>
      <a href='/'>
      <img src={logo} alt='xboard-logo' className={styles.logo}/>
      </a>
      <img src={header} alt='pages' className={styles.header} />
      <div>
      <button className={styles.Connectbox}>Connect now</button>
      </div>
      </div>
      <div className={styles.content}>
        <div>
        <h1 className={styles.heading} >You don't have to <br /> Fight them Alone.</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, <br />
        curabitur sodales conubia ut inceptos faucibus himenaeos tortor <br/> eget, hac massa gravida arcu interdum proin curae.</p>
        <form className={styles.from} > 
        <MailTwoToneIcon className={styles.icon} />
        <input type='text' className={styles.input} placeholder='Enter your Email address..' />       
        <button  className={styles.button} type='submit'>Let's talk</button>
        </form>
        </div>
        <div >
            <img src={photo} alt='...' className={styles.photo} />
        </div>
      </div>
      </div>
   </div>
   );
}

export default LawFrim;