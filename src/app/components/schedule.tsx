"use client";
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";

const scheduleData = {
  "Day 1": [
    { time: "6:30pm", room: "Lobby", event: "Check-in" },
    { time: "7:30pm", room: "Room 113", event: "Dinner" },
    {
      time: "8:30pm",
      room: "Room 101",
      event: "Opening Ceremony",
    },
    { time: "9:30pm", room: "Lobby", event: "Hacking Begins!" },
    { time: "9:30pm", room: "Room 101", event: "Team building social" },
    {
      time: "10:00pm",
      room: "Room 004",
      event: "Workshop 1",
    },
    { time: "12:00am", room: "Room 006", event: "Midnight Snacks" },
  ],
  "Day 2": [
    { time: "9:00am", room: "Room 113", event: "Breakfast" },
    {
      time: "10:00am",
      room: "Room 008",
      event: "Sponsor Workshop",
    },
    {
      time: "11:00am",
      room: "Lobby",
      event: "Career Fair",
    },
    { time: "12:00pm", room: "Room 113", event: "Lunch" },
    {
      time: "1:00pm",
      room: "Room 008",
      event: "Workshop 2",
    },
    {
      time: "6:00pm",
      room: "Room 113",
      event: "Dinner",
    },
    {
      time: "8:00pm",
      room: "Room 006",
      event: "Fun Activity (e.g., Trivia)",
    },
  ],
  "Day 3": [
    { time: "12:00am", room: "Room 113", event: "Midnight snacks" },
    { time: "8:00am", room: "Room 113", event: "Breakfast" },
    { time: "9:00am", room: "", event: "Project submission deadline" },
    {
      time: "10:30am - 1:00pm",
      room: "All",
      event: "Judging",
    },
    { time: "1:00pm", room: "Room 113", event: "Lunch" },
    {
      time: "3:00pm",
      room: "Main Hall",
      event: "Closing Award Ceremony",
    },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  return (
    <Flex
      justify="center"
      className="overflow-hidden w-full bg-primary"
      direction="column"
    >
      <Flex className="flex-col text-foreground max-w-6xl mx-auto w-full py-12">
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-3xl font-primary text-center sm:text-5xl text-foreground font-extrabold gap-4"
        >
          <span className="font-extrabold w-min whitespace-nowrap text-accent text-sm border-2 border-accent rounded-lg p-2">
            SCHEDULE
          </span>
          <p className="text-foreground">EVENT SCHEDULE</p>
        </Flex>
        <Flex justify="center" gap="4" className="mb-8 px-4 font-secondary">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`p-2 px-3 rounded-xl transition-all ${
                selectedDay === day
                  ? "bg-accent font-bold text-accent-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {day}
            </button>
          ))}
        </Flex>
        <Flex direction="column" gap="4" className="px-4">
          {scheduleData[selectedDay].map((item, index) => (
            <Flex
              key={index}
              className="bg-primary border-b border-secondary font-secondary text-foreground p-4"
            >
              <Flex className="flex-col sm:flex-row mr-6">
                <Text className="font-bold sm:pr-4 sm:border-r-2 font-primary border-secondary">
                  {item.time}
                </Text>
                <Text className="text-nowrap sm:pl-4 text-foreground/80">
                  {item.room || ""}
                </Text>
              </Flex>
              <Text className="ml-auto text-right">{item.event}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Schedule;
