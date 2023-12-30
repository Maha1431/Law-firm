import React from "react";
import styles from "../FAQ/faq.module.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import plus from "../../assests/plusbtn.png";

function FAQ() {
  return (
    <div className={styles.box}>
      <div>
        <h1>FAQ</h1>
        <h5 className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit <br />
          aliqua dolor do amet sint.{" "}
        </h5>
      </div>
      <Box sx={{ padding: '50px' }} >
        <h4>Do I need a personal injury report?</h4>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit
          <br />
          aliqua dolor do amet sint. Velit officia consequatduis
          <br />
          enim velit mollit Exer. Amet minim mollit non deserunt
          <br />
          ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
          enim velit mollit Exer.
        </p>
        <Stack
          direction="column"
          divider={
            <Divider
              orientation="horizontal"
              sx={{ borderColor: "#FFFFFF", opacity: "0.2" }}
              flexItem
            />
          }
          spacing={3}
        >
          <div className={styles.btn}>
            <h3>How much is my case worth? </h3>
            <img src={plus} alt="plus button" />
          </div>
          <div className={styles.btn}>
            <h3>What should I do right after car accidect</h3>
            <img src={plus} alt="plus button" />
          </div>
          <div className={styles.btn}>
            <h3>How much is my case worth?</h3>
            <img src={plus} alt="plus button" />
          </div>
        </Stack>
      </Box>
    </div>
  );
}
export default FAQ;
