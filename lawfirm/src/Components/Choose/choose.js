import React from "react";
import styles from "../Choose/choose.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icon from "../../assests/icon.png";

function Choose() {

    // const useStyles = {
    //     button: {
    //         backgroundColor: "#E3B748",
    //         color: '#000000',
    //         // Set the color to white
    //       // Add other styles if needed
        
    //     },
    //   };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Why Choose us?</h1>
      <div className={styles.cardcontainer}>
      <Card sx={{ width: 305, backgroundColor: '#1D1D1D', border:'1px solid rgba(255, 255, 255, 0.3)', borderRadius:'14px '}}>
        <CardContent>
          <Typography variant="body1" component="div">
            <img src={icon} alt="icon" />
          </Typography>
          <Typography variant="h6" component="div">
            98% Success Rate
          </Typography>
          <Typography variant="p" color="text.secondary">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={styles.Button}>ReadMore</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: 305, backgroundColor: '#2E2E2E', border:'1px solid rgba(255, 255, 255, 0.3)', borderRadius:'14px ' }}>
        <CardContent>
          <Typography variant="body1" component="div">
            <img src={icon} alt="icon" />
          </Typography>
          <Typography variant="h6" component="div">
          100% Success Rate
          </Typography>
          <Typography variant="p" color="text.secondary">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={styles.Button}>ReadMore</Button>
        </CardActions>
      </Card>
      <Card sx={{ width: 305,backgroundColor: '#1D1D1D', border:'1px solid rgba(255, 255, 255, 0.3)', borderRadius:'14px ' }}>
        <CardContent>
          <Typography variant="body1" component="div">
            <img src={icon} alt="icon" />
          </Typography>
          <Typography variant="h6" component="div">
          100% Success Rate
          </Typography>
          <Typography variant="p" color="text.secondary">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={styles.Button}>ReadMore</Button>
        </CardActions>
      </Card>
      </div>
    </div>
  );
}
export default Choose;
