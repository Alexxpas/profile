// import React, { useState } from "react";
import React from "react";
import { Switch, Route, Redirect, NavLink, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
// import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { ContactPage } from "./containers/contactPage/ContactPage";
import { MeditationPage } from "./containers/meditationPage/MeditationPage";
import { ProfilePage } from "./containers/profilePage/ProfilePage";
import { HomePage } from "./containers/homePage/HomePage";

import "./App.css";

function App() {
  let location = useLocation();

  // const [contacts, setContacts] = useState([]);
  // const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    HOME: "/home",
    CONTACTS: "/contacts",
    PROFILE: "/profile",
    APPOINTMENTS: "/appointments",
    MEDITATION: "/meditation",
    CONTACT: "/contact"
  };


  /*
  Implement functions to add data to
  contacts and appointments
  */

  // const addContact = (name, phone, email) => {
  //   setContacts((prev) => [...prev, { name, phone, email }]
  //   );
  // }

  // const addAppointment = (title, contact, date, time) => {
  //   setAppointments((prev) =>
  //     [...prev, { title, contact, date, time }]
  //   );

  // }

  // Moving circle around mouse
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30;
  });

  setInterval(function () {
    xp += ((mouseX - xp) / 6);
    yp += ((mouseY - yp) / 6);
    document.getElementById("circle").style.left = xp + 'px';
    document.getElementById("circle").style.top = yp + 'px';
  }, 1);


  return (
    <>
      <div className="background-scrim"></div>
      <nav>
        <NavLink to={ROUTES.HOME} activeClassName="active">
          Home
        </NavLink>
        <NavLink to={ROUTES.PROFILE} activeClassName="active">
          Profile
        </NavLink>
        <NavLink to={ROUTES.CONTACT} activeClassName="active">
          Contact
        </NavLink>
        {/* <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink> */}
        {/* <NavLink to={ROUTES.MEDITATION} activeClassName="active">
          Meditation
        </NavLink> */}
      </nav>
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >

            <Switch location={location}>

              {/* Home redirect */}
              <Route exact path="/">
                <Redirect to={ROUTES.HOME} />
              </Route>

              {/* HOME SECTION *************/}
              <Route path={ROUTES.HOME}>
                <HomePage />
              </Route>

              {/* PROFILE SECTION *************/}
              <Route path={ROUTES.PROFILE}>
                <ProfilePage />
              </Route>

              <Route path={ROUTES.CONTACT}>
                <ContactPage />
              </Route>

              {/* MEDITATION SECTION *************/}
              <Route path={ROUTES.MEDITATION}>
                <MeditationPage />
              </Route>

              {/* CONTACTS SECTION *************/}
              {/* <Route path={ROUTES.CONTACTS}>
                <ContactsPage addContact={addContact}
                  contacts={contacts} />
              </Route> */}

              {/* APPOINTMENTS SECTION *************/}
              {/* <Route path={ROUTES.APPOINTMENTS}>
                <AppointmentsPage addAppointment={addAppointment}
                  appointments={appointments}
                  contacts={contacts} />
              </Route> */}

            </Switch>

          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

export default App;
