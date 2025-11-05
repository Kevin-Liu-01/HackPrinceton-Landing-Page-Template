"use client";
import React, { useState } from "react";
import { Flex, Text } from "@radix-ui/themes";

// --- Data Section ---
// I've added the 'type' property to categorize each event.
const scheduleData = {
  "Day 1": [
    { time: "6:30pm", room: "Lobby", event: "Check-in", type: "main" },
    { time: "7:30pm", room: "Room 113", event: "Dinner", type: "meal" },
    {
      time: "8:30pm",
      room: "Room 101",
      event: "Opening Ceremony",
      type: "main",
    },
    {
      time: "9:30pm",
      room: "Lobby",
      event: "Hacking Begins!",
      type: "main",
    },
    {
      time: "9:30pm",
      room: "Room 101",
      event: "Team building social",
      type: "social",
    },
    {
      time: "10:00pm",
      room: "Room 004",
      event: "Workshop 1",
      type: "workshop",
    },
    {
      time: "12:00am",
      room: "Room 006",
      event: "Midnight Snacks",
      type: "meal",
    },
  ],
  "Day 2": [
    { time: "9:00am", room: "Room 113", event: "Breakfast", type: "meal" },
    {
      time: "10:00am",
      room: "Room 008",
      event: "Sponsor Workshop",
      type: "workshop",
    },
    {
      time: "11:00am",
      room: "Lobby",
      event: "Career Fair",
      type: "social",
    },
    { time: "12:00pm", room: "Room 113", event: "Lunch", type: "meal" },
    {
      time: "1:00pm",
      room: "Room 008",
      event: "Workshop 2",
      type: "workshop",
    },
    {
      time: "6:00pm",
      room: "Room 113",
      event: "Dinner",
      type: "meal",
    },
    {
      time: "8:00pm",
      room: "Room 006",
      event: "Fun Activity (e.g., Trivia)",
      type: "social",
    },
  ],
  "Day 3": [
    {
      time: "12:00am",
      room: "Room 113",
      event: "Midnight snacks",
      type: "meal",
    },
    { time: "8:00am", room: "Room 113", event: "Breakfast", type: "meal" },
    {
      time: "9:00am",
      room: "",
      event: "Project submission deadline",
      type: "main",
    },
    {
      time: "10:30am - 1:00pm",
      room: "All",
      event: "Judging",
      type: "main",
    },
    { time: "1:00pm", room: "Room 113", event: "Lunch", type: "meal" },
    {
      time: "3:00pm",
      room: "Main Hall",
      event: "Closing Award Ceremony",
      type: "main",
    },
  ],
};

// --- Event Type Definitions ---
// Defines the colors and names for the filter buttons and event tags.
const eventTypes = {
  main: {
    name: "Main Event",
    color: "bg-rose-600 text-white",
  },
  meal: {
    name: "Food",
    color: "bg-amber-500 text-amber-950",
  },
  workshop: {
    name: "Workshop",
    color: "bg-sky-600 text-white",
  },
  social: {
    name: "Social",
    color: "bg-teal-600 text-white",
  },
};

// --- Helper Function to parse event string ---
/**
 * Parses an event string to separate the title from the presenter.
 * @param {string} eventString - The event string to parse.
 * @returns {{title: string, presenter: string|null}}
 */
const parseEvent = (eventString) => {
  const separators = [
    { key: " presented by ", len: 14 },
    { key: " with ", len: 6 },
    { key: " by ", len: 4 },
  ];

  let splitIndex = -1;
  let presenterPrefixLen = 0;

  for (const sep of separators) {
    const index = eventString.lastIndexOf(sep.key);
    if (index !== -1) {
      splitIndex = index;
      presenterPrefixLen = sep.len;
      break;
    }
  }

  if (splitIndex !== -1) {
    const title = eventString.substring(0, splitIndex);
    const presenter = eventString.substring(splitIndex + presenterPrefixLen);
    return { title, presenter };
  }

  return { title: eventString, presenter: null };
};

// --- Component ---
const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // State for active filters, correctly typed as string[]
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Function to toggle a filter
  const toggleFilter = (typeKey: string) => {
    setActiveFilters(
      (prevFilters) =>
        prevFilters.includes(typeKey)
          ? prevFilters.filter((f) => f !== typeKey) // Remove filter
          : [...prevFilters, typeKey] // Add filter
    );
  };

  // Filter the events based on state
  const filteredEvents = scheduleData[selectedDay].filter((item) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.includes(item.type);
  });

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
              onClick={() => {
                setSelectedDay(day);
                setActiveFilters([]); // Reset filters when changing day
              }}
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

        {/* --- NEW: Filter Button Bar --- */}
        <Flex
          justify="center"
          gap="3"
          className="mb-8 px-4 flex-wrap font-secondary"
          align="center"
        >
          <Text className="text-foreground text-sm mr-2">Filter by:</Text>
          {Object.entries(eventTypes).map(([key, { name, color }]) => (
            <button
              key={key}
              onClick={() => toggleFilter(key)}
              className={`py-1 px-3 rounded-full text-sm font-bold transition-all ${
                activeFilters.includes(key)
                  ? `${color} opacity-100`
                  : `bg-secondary text-foreground/70 hover:bg-secondary/80 opacity-60`
              }`}
            >
              {name}
            </button>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={() => setActiveFilters([])}
              className="text-foreground text-sm hover:underline"
            >
              (Clear all)
            </button>
          )}
        </Flex>

        {/* --- UPDATED: Event List Rendering --- */}
        <Flex direction="column" gap="4" className="px-4">
          {filteredEvents.map((item, index) => {
            const { title, presenter } = parseEvent(item.event);
            const typeInfo = eventTypes[item.type];

            return (
              <Flex
                key={index}
                direction="column"
                className="bg-primary font-secondary border-2 border-secondary text-foreground p-4 rounded-lg"
              >
                <Flex className="flex-col sm:flex-row w-full">
                  {/* Time and Room Info */}
                  <Flex className="flex-col">
                    <Flex className="flex-col sm:flex-row mr-6">
                      <Text className="font-bold sm:pr-4 sm:border-r-2 font-primary border-secondary/50">
                        {item.time}
                      </Text>
                      <Text className="text-nowrap sm:pl-4 text-foreground/80">
                        {item.room || "TBA"}
                      </Text>
                    </Flex>
                    {/* Color-coded Tag */}
                    {typeInfo && (
                      <Flex className="mt-3">
                        <span
                          className={`py-0.5 px-2.5 rounded-full text-xs font-bold ${typeInfo.color}`}
                        >
                          {typeInfo.name}
                        </span>
                      </Flex>
                    )}
                  </Flex>

                  {/* Event Title and Presenter */}
                  <Flex
                    direction="column"
                    className="ml-0 sm:ml-auto text-left sm:text-right mt-2 sm:mt-0 flex-1"
                  >
                    <Text className="font-bold font-primary">{title}</Text>
                    {presenter && (
                      <Text className="text-foreground/80 text-sm mt-1">
                        {presenter}
                      </Text>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            );
          })}

          {/* Show message if no events match filter */}
          {filteredEvents.length === 0 && (
            <Flex
              justify="center"
              className="bg-primary font-secondary border-2 border-dashed border-secondary/50 text-foreground/70 p-8 rounded-lg"
            >
              <Text>No events match your selected filters for this day.</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Schedule;
