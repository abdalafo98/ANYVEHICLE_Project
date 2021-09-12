import React, { useState } from "react";
import "./order_form.css";
import axios from "axios";
import Icon from "./../../../src/icon.png";
const OrderForm = () => {
  const years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2018",
    "2019",
    "2020",
    "2021",
  ];

  const token = localStorage.getItem("token");

  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [problem, setProblem] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitOrder = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/order",
        {
          phoneNumber,
          vehicleType,
          make,
          year,
          vehicleId,
          problem,
          dateOfService,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        if (result.status === 201) {
          setMessage(result.data.message);
          return;
        }
        setMessage(result.data.message);
      })
      .catch((err) => {});
  };
  return (
    <section className="form-customer">
      <section className="form-customer-header">
        <img src={Icon} />
        <h1>Vehicle Maintenance Request</h1>
      </section>

      <form onSubmit={onSubmitOrder}>
        <div className="form-section">
          <input
            type="text"
            key="make"
            placeholder="make"
            required
            onChange={(e) => {
              setMake(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="date of service"
            key="date-of-service"
            required
            onChange={(e) => {
              setDateOfService(e.target.value);
            }}
          />
        </div>
        <div className="form-section">
          <select
            name="year"
            key="year"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            {years.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            key="vehicle-id"
            placeholder="vehicle id"
            required
            onChange={(e) => {
              setVehicleId(e.target.value);
            }}
          />
        </div>
        <div className="form-section">
          <input
            type="text"
            placeholder="vehicle type"
            key="vehicle-type"
            required
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="phone number"
            key="phone-number"
            required
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>

        <textarea
          type="text"
          placeholder="Tell Me about Your problem"
          key="problem"
          required
          onChange={(e) => {
            setProblem(e.target.value);
          }}
        ></textarea>
        <button type="submit" key="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
    </section>
  );
};

export default OrderForm;
