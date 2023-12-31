import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./views/pages/Home/Home.js";
import Login from "./views/pages/Login/Login.js";
import Register from "./views/pages/Register/Register.js";
import Contacts from "./views/pages/Contacts/Contacts.js";
import CreateContact from "./views/pages/CreateContact/CreateContact.js";
import EditContact from "./views/pages/EditContact/EditContact.js";
import Groups from "./views/pages/Groups/Groups.js";
import EditGroup from "./views/pages/EditGroup/EditGroup.js";
import CreateGroup from "./views/pages/CreateGroup/CreateGroup.js";
import SavedEvents from "./views/pages/SavedEvents/SavedEvents.js";
import EventResults from "./views/pages/EventResults/EventResults.js";
import { getContacts, getGroups, getSavedEvents } from "./actions";
import EventDetails from "./views/pages/EventDetails/EventDetails.js";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    if (user) {
      dispatch(getContacts());
      dispatch(getGroups());
      dispatch(getSavedEvents());
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventResults />} />
        <Route
          path="/events/:sourceValue/:sourceId"
          element={<EventDetails />}
        />
        <Route
          path="/contacts/:userId"
          element={user ? <Contacts /> : <Navigate to="/login" />}
        />
        <Route
          path="/groups/:userId"
          element={user ? <Groups /> : <Navigate to="/login" />}
        />
        <Route
          path="/saved-events/:userId"
          element={user ? <SavedEvents /> : <Navigate to="/login" />}
        />
        <Route
          path="/contacts/create"
          element={user ? <CreateContact /> : <Navigate to="/login" />}
        />
        <Route
          path="/contacts/edit/:contactId"
          element={user ? <EditContact /> : <Navigate to="/login" />}
        />
        <Route
          path="/groups/create"
          element={user ? <CreateGroup /> : <Navigate to="/login" />}
        />
        <Route
          path="/groups/edit/:groupId"
          element={user ? <EditGroup /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
