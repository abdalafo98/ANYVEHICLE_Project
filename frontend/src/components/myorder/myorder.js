import React, { useState, useEffect } from "react";
import axios from "axios";
import "./myorder.css";
const MyOrder = () => {
  const [result, setResult] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/order", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        if (result.status === 200) {
          setResult(result.data);
          console.log(result);
          return;
        }
      })
      .catch((err) => {});
  }, [result]);
  return (
    <div className="orders">
      {result.map((element, index) => {
        let date_of_service = element.date_of_service.split("T")[0];
        console.log("year", date_of_service);
        return (
          <div key={index} className="order-card">
            <p>
              <span>date of service:</span> {date_of_service}
            </p>
            <p>
              {" "}
              <span>make: </span>
              {element.make}
            </p>
            <p>
              <span> order status:</span> {element.order_status}
            </p>
            <p>
              <span>phone number: </span>
              {element.phone_number}
            </p>

            <p>
              <span>vehicle id:</span>
              {element.vehicle_id}
            </p>
            <p>
              <span>vehicle type:</span> {element.vehicle_type}
            </p>
            <p>
              <span>year:</span> {element.year}
            </p>
            <p>
              {" "}
              <span>problem:</span> {element.problem}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrder;
