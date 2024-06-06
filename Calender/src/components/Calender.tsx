import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addWeeks,
  subWeeks,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isSameMonth,
} from "date-fns";
import styled from "styled-components";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

const Tab = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.isActive ? "2px solid #F4A261" : "2px solid transparent"};
  color: ${(props) => (props.isActive ? "#F4A261" : "#000000")};
  cursor: pointer;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

  &:hover {
    color: #f4a261;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #f4a261;
  }
`;

const DaysHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

const DayLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const DaysContainer = styled.div<{ view: string }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  width: 100%;
  max-width: 400px;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const DayNumber = styled.div<{ isSelected: boolean; isCurrentMonth: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isSelected ? "#0096FF" : "transparent"};
  color: ${(props) =>
    props.isSelected
      ? "#FFFFFF"
      : props.isCurrentMonth
      ? "#000000"
      : "#CCCCCC"};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0096ff;
    color: #ffffff;
  }
`;

const EventDot = styled.span`
  position: absolute;
  bottom: 1px;
  width: 4px;
  height: 4px;
  background-color: red;
  border-radius: 50%;
`;

const EventList = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

const EventItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
`;

const EventDate = styled.div`
  background-color: #f4a261;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: bold;
`;

interface Event {
  date: Date;
  title: string;
}

const events: Event[] = [
  { date: new Date(2024, 4, 27), title: "Event 1" },
  { date: new Date(2024, 4, 29), title: "Event 2" },
  { date: new Date(2024, 4, 2), title: "Event 3" },
];

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [view, setView] = useState<"month" | "week">("month");

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 });
  const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 0 });

  const days =
    view === "week"
      ? eachDayOfInterval({ start: startOfCurrentWeek, end: endOfCurrentWeek })
      : eachDayOfInterval({
          start: startOfWeek(startOfMonth(currentDate), { weekStartsOn: 0 }),
          end: endOfWeek(endOfMonth(currentDate), { weekStartsOn: 0 }),
        });

  const monthYear = format(currentDate, "MMMM yyyy");
  const weekRange = `${format(startOfCurrentWeek, "MMMM dd")} - ${format(
    endOfCurrentWeek,
    "MMMM dd"
  )}`;

  const eventsForSelectedDate = selectedDate
    ? events.filter((event) => isSameDay(event.date, selectedDate))
    : [];

  const handlePrevPeriod = () => {
    if (view === "month") {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      setCurrentDate(subWeeks(currentDate, 1));
    }
  };

  const handleNextPeriod = () => {
    if (view === "month") {
      setCurrentDate(addMonths(currentDate, 1));
    } else {
      setCurrentDate(addWeeks(currentDate, 1));
    }
  };

  return (
    <CalendarContainer>
      <h1>Election Calendar</h1>
      <Tabs>
        <Tab isActive={view === "month"} onClick={() => setView("month")}>
          Month
        </Tab>
        <Tab isActive={view === "week"} onClick={() => setView("week")}>
          Week
        </Tab>
      </Tabs>
      <Header>
        <NavButton onClick={handlePrevPeriod} aria-label="Previous Period">
          {"<"}
        </NavButton>
        <Title>{view === "month" ? monthYear : weekRange}</Title>
        <NavButton onClick={handleNextPeriod} aria-label="Next Period">
          {">"}
        </NavButton>
      </Header>
      <DaysHeader>
        {daysOfWeek.map((day) => (
          <DayLabel key={day}>{day}</DayLabel>
        ))}
      </DaysHeader>
      <DaysContainer view={view}>
        {days.map((date) => {
          const hasEvent = events.some((event) => isSameDay(event.date, date));
          return (
            <Day
              key={date.toDateString()}
              onClick={() => setSelectedDate(date)}
            >
              <DayNumber
                isSelected={
                  selectedDate ? isSameDay(date, selectedDate) : false
                }
                isCurrentMonth={isSameMonth(date, currentDate)}
              >
                {format(date, "d")}
              </DayNumber>
              {hasEvent && <EventDot />}
            </Day>
          );
        })}
      </DaysContainer>
      {selectedDate && (
        <EventList>
          <h3>Events on {format(selectedDate, "PPP")}:</h3>
          {eventsForSelectedDate.length > 0 ? (
            eventsForSelectedDate.map((event, index) => (
              <EventItem key={index}>
                <EventDate>{format(event.date, "dd")}</EventDate>
                {event.title}
              </EventItem>
            ))
          ) : (
            <p>No events</p>
          )}
        </EventList>
      )}
    </CalendarContainer>
  );
};

export default Dashboard;
