import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../admin/admin.css";
const MyOrder = () => {
  const [result, setResult] = useState([]);

  const token = localStorage.getItem("token");

  const heading = [
    "order id",
    "date of service",
    "make",
    "phone number",
    "vehicle id",
    "year",
    "problem",
    "order status",
  ];

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
          return;
        }
      })
      .catch((err) => {});
  }, [result]);
  return (
    <div className="my-order">
      <h2>My Orders</h2>{" "}
      <table>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((element) => {
              let date_of_service = element.date_of_service.split("T")[0];

              return (
                <>
                  <tr>
                    <th>{element.id}</th>
                    <th>{date_of_service}</th>
                    <th>{element.make}</th>
                    <th>{element.phone_number}</th>
                    <th>{element.vehicle_id}</th>
                    <th>{element.year}</th>
                    <th>{element.problem}</th>
                    <th>{element.order_status}</th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
