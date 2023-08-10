import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(dayjs(props.initValue));

  const handleAccept = (newValue) => {
    console.log(newValue.format("YYYY-MM-DD m:ss")); // Output selected date in YYYY-MM-DD format
    setValue(newValue.format("YYYY-MM-DD m:ss"));
    props.setDateHandler(newValue.format("YYYY-MM-DD m:ss"))
    // props.applyFilter()
  };

  const handleKeyDown = (event) => {
    // 모든 키 입력 방지
    event.preventDefault();
  };

  return (
    <div className="muiDatePicker" 
    onKeyDown={handleKeyDown}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            // label='Date Picker'
            value={value}
            onAccept={handleAccept}
            sx={{
              padding: "0px",
              // backgroundColor:'black',
              // minWidth:'50px',
              // maxWidth:'500px',
              // width:'500px',
              width:'auto',
              "& label": {
                height: "30px", // 원하는 높이로 조정하세요.
                display: "flex",
                alignItems: "center",
              },
              "& .MuiInputBase-root": {
                backgroundColor: "white",
                overflow: 'hidden',
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
