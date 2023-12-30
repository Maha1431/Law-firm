import React from "react";
import styles from "../happyClients/Clients.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img1 from "../../assests/jane.png";
import img2 from "../../assests/devon.png";
import img3 from "../../assests/robert.png";

function ClientBox() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        What says our <br /> happy Clients
      </h1>
      <div className={styles.cardcontainer}>
        <Card
          sx={{
            width: 305,
            backgroundColor: "#1D1D1D",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "14px ",
          }}
        >
          <CardContent>
            <Typography variant="body1" component="div">
              <img src={img1} alt="icon" />
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#FFFFFF" }}>
              Jane Cooper
            </Typography>
            <Typography
              sx={{ fontSize: 11, color:'#FFFFFF'  }}
              color="text.secondary"
              gutterBottom
            >
              Ceo of Hunt
            </Typography>
            <Typography variant="p" color="text.secondary" sx={{ color: "#FFFFFF" , opacity: 0.3 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 305,
            backgroundColor: "#2E2E2E",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "14px ",
          }}
        >
          <CardContent>
            <Typography variant="body1" component="div">
              <img src={img2} alt="icon" />
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#FFFFFF" }}>
              Devon Lane
            </Typography>
            <Typography
              sx={{ fontSize: 11, color:'#FFFFFF'  }}
              color="text.secondary"
              gutterBottom
            >
              Ceo of Hunt
            </Typography>
            <Typography variant="p" color="text.secondary" sx={{ color: "#FFFFFF", opacity: 0.3  }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 305,
            backgroundColor: "#1D1D1D",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "14px ",
          }}
        >
          <CardContent>
            <Typography variant="body1" component="div">
              <img src={img3} alt="icon" />
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#FFFFFF" }}>
              Robert Fox
            </Typography>
            <Typography
              sx={{ fontSize: 11, color:'#FFFFFF' }}
              color="text.secondary"
              gutterBottom
            >
              Ceo of Hunt
            </Typography>
            <Typography variant="p" color="text.secondary" sx={{ color: "#FFFFFF", opacity: 0.3 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default ClientBox;
