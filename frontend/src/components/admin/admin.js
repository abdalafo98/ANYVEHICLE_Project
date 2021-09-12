import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";

import axios from "axios";
import "./admin.css";

const Admin = () => {
  const [orders, setOrders] = useState([]);

  const pending = orders.filter((element) => {
    return element.order_status === "pending";
  });
  const accepted = orders.filter((element) => {
    return element.order_status === "accepted";
  });
  const dismissed = orders.filter((element) => {
    return element.order_status === "dismissed";
  });

  const data = [
    { name: "pending", value: pending.length },
    { name: "accepted", value: accepted.length },
    { name: "dismissed", value: dismissed.length },
  ];

  let token = localStorage.getItem("token");

  const heading = [
    "order id",
    "First Name",
    "Last Name",
    "Email",
    "date of service",
    "make",
    "phone number",
    "vehicle id",
    "year",
    "problem",
    "order status",
  ];

  const statusOrder = ["accepted", "pending", "dismissed"];

  useEffect(() => {
    axios
      .get("http://localhost:5000/all/order", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setOrders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeStatusOrder = (orderStatus, orderId) => {
    axios
      .patch(
        "http://localhost:5000/change/status/order",
        { orderStatus, orderId },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {})
      .catch((err) => {});
  };

  return (
    <div className="admin">
      <h2>Chart Status Order</h2>
      <section className="chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="rgb(228, 124, 31)"
            label
          />

          <Tooltip />
        </PieChart>
      </section>
      <table>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((element) => {
              let date_of_service = element.date_of_service.split("T")[0];

              return (
                <>
                  <tr>
                    <th>{element.id}</th>
                    <th>{element.firstName}</th>
                    <th>{element.lastName}</th>
                    <th>{element.email}</th>
                    <th>{date_of_service}</th>
                    <th>{element.make}</th>
                    <th>{element.phone_number}</th>
                    <th>{element.vehicle_id}</th>
                    <th>{element.year}</th>
                    <th>{element.problem}</th>
                    <th>
                      <select
                        onChange={(e) => {
                          changeStatusOrder(e.target.value, element.id);
                        }}
                        defaultValue={element.order_status}
                      >
                        {statusOrder.map((status) => {
                          return <option value={status}>{status}</option>;
                        })}
                      </select>
                    </th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
