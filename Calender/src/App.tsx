import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calender";
function App() {
  const [date, setDate] = useState<any>(new Date());
  const [selectRange, setSelectRange] = useState<boolean>(false);
  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <Calendar
        date={date}
        setDate={setDate}
        selectRange={selectRange}
        setSelectRange={setSelectRange}
      />
    </div>
  );
}

export default App;
