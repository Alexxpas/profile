import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={name}
        onChange={({ target }) => { setName(target.value) }}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={phone}
        pattern="(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}"
        onChange={({ target }) => { setPhone(target.value) }}
        placeholder="Phone number"
        required
      />
      <input type="text"
        value={email}
        onChange={({ target }) => { setEmail(target.value) }}
        placeholder="Email"
        required
      />
      <input type="submit" />
    </form>
  );
};
