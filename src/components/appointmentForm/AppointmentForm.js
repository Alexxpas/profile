import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={({ target }) => { setTitle(target.value) }}
        placeholder="Title"
        required
      ></input>

      <input
        type="text"
        value={time}
        onChange={({ target }) => { setTime(target.value) }}
        placeholder="Booking time"
        required>
      </input>

      <input
        type="date"
        value={date}
        onChange={({ target }) => { setDate(target.value) }}
        min={getTodayString()}
        placeholder="Booking Date"
        required
      ></input>
      <ContactPicker
        value={contact}
        contacts={contacts}
        onChange={({ target }) => { setContact(target.value) }}
      />
      <input type="submit" />
    </form>

  );
};
