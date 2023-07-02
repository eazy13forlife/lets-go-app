import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./views/pages/Home/Home.js";
import Login from "./views/pages/Login/Login.js";
import Register from "./views/pages/Register/Register.js";
import Contacts from "./views/pages/Contacts/Contacts.js";
import Groups from "./views/pages/Groups/Groups.js";
import SavedEvents from "./views/pages/SavedEvents/SavedEvents.js";
import EventResults from "./views/pages/EventResults/EventResults.js";

const App = () => {
  const user = useSelector((state) => {
    return state.user;
  });

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
