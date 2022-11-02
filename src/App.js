import "./App.css";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Grid } from "@mantine/core";
import { Input, Select } from "@mantine/core";
import {
  IconCalendar,
  IconAt,
  IconChevronDown,
  IconInfoCircle,
} from "@tabler/icons";
import moment from "moment";
import dayjs from "dayjs";
import cottom from "./utils/cottom";
import linen from "./utils/linen";

function App() {
  const [dateValue, setDateValue] = useState();
  const [type, setType] = useState("");
  const [count, setCount] = useState("");
  const [orders, setOrders] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [status, setStatus] = useState({
    inputStatus: true,
    dateStatus: true,
    typeStatus: true,
  });


  const errorStyle = {
    border: "4px solid red",
    borderRadius: "30px",
  };

  const  pStyle = {
    display: "flex",
    position: "absolute",
    top: "620px",
    bordeRadius: "30px",
    left: "650px",
    border: "1px solid burlywood"
  }

  const handleClick = () => {
    let selectDate = moment(dateValue);
    let bool = count < 100 && count > 0;
    if (dateValue && bool && type) {
      switch (type) {
        case "Cottom": {
          selectDate = cottom(count, selectDate);
          break;
        }
        case "Linen": {
          selectDate = linen(count, selectDate);
          break;
        }
      }

      let obj = {
        day: selectDate.date(),
        month: selectDate.format("MMMM"),
        year: selectDate.year(),
      };
      setOrders((prev) => [...prev, obj]);
      inputClear();
    } else {
      alert("Please Fill All Information Correctly");
      dateValue ? setStatus({...status,dateStatus:true}) :  setStatus({...status,dateStatus:false})
      type ? setStatus({...status,typeStatus:true}) :  setStatus({...status,typeStatus:false})
    }
  };
   console.log(status);
  const inputClear = () => {
    setDateValue(new Date());
    setCount("");
    setType("");
  };

  const handleSelect = (value) => {
    console.log(value);
    setType(value);
  };  

  const inputChange = (e) => {
    if (e >= 100 || e < 1) {
      setStatus((prev) => {
        console.log("11");
        return { ...prev, inputStatus: false };
      });
      console.log("hatalı giris", status.inputStatus);
    } else {
      setStatus((prev) => {
        return { ...prev, inputStatus: true };
      });
      console.log("başarılı");
    }
    setCount(e);
  };
  const onChange = (date) => {
    setDateValue(date);
  };
  
  return (
    <div className="App">
      <div className="co1">
        <div className="co2"></div>
      </div>
      <div className="header">
        <h1>The Company</h1>
        <h2>Shipping Time Calculator</h2>
      </div>

      <div className="container">
        <Grid style={{ marginLeft: "5rem" }}>
          <Grid.Col span={2}>
            <DatePicker
              placeholder="Order Date"
              style={status.dateStatus ? {} : errorStyle}
              radius="xl"
              size="xl"
              minDate={new Date()
                }
              onChange={onChange}
              value={dateValue}
              rightSection={
                <IconCalendar style={{ color: "gray", marginRight: "1rem" }} />
              }
            />
          </Grid.Col>

          <Grid.Col span={2}>
            <Select
              onChange={handleSelect}
              placeholder="Fabric Type"
              style={status.typeStatus ? {} : errorStyle}
              size="xl"
              value={type}
              rightSection={
                <IconChevronDown
                  style={{ color: "gray", marginRight: "1rem" }}
                />
              }
              radius="xl"
              data={[
                { value: "Linen", label: "Linen" },
                { value: "Cottom", label: "Cottom" },
              ]}
            />
          </Grid.Col>
          <Grid.Col span={2}>
             {isShown && <p style={pStyle}>Shipping Dates May Vary Based on Quantity</p>}
            <Input
              style={status.inputStatus ? {} : errorStyle}
              placeholder="Quantity"
              radius="xl"
              size="xl"
              onChange={(e) => inputChange(e.target.value)}
              
              value={count}
              rightSection={
                <IconInfoCircle
                onMouseOver={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                  style={{ size: "15px", color: "gray", marginRight: "1rem" }}
                />
              }
            />
          </Grid.Col>
        </Grid>
      </div>

      <button className="button" onClick={handleClick}>
        Calculate
      </button>

      {orders.length > 0 ? (
        <div>
          {orders &&
            orders.map((item, index) => {
              return (
                <div key={index}>
                  <h3>
                    Your Estimated Shipping Time Is
                    <strong>{` ${item.day} ${item.month} ${item.year}`}</strong>
                  </h3>
                </div>
              );
            })}
        </div>
      ) : (
        <h3>Please enter your order information to estimate shipping date</h3>
      )}
    </div>
  );
}

export default App;