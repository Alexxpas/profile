import React from "react";


export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <div>
      <select
        onChange={onChange}>
        <option value="">---</option>
        {contacts.map(contact =>
          <option value={contact.name} >{contact.name}</option>
        )}
      </select>
    </div>
  );
};


