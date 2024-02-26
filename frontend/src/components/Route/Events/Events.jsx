import React from "react";
// import { useSelector } from "react-redux";
import EventCard from "./EventCard.jsx";
import styles from "../../../styles/styles.js";

const Events = () => {
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Giảm giá đặc biệt</h1>
        </div>

        <div className="w-full grid">
          <h4>
            <EventCard />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Events;
