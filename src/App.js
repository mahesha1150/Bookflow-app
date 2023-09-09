/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage.jsx";
import AuthPage from "./pages/login_page/AuthPage.jsx";
import AdminPanel from "./pages/admin_panel/AdminPanel.jsx";
import StudentPanel from "./pages/student_panel/StudentPanel.jsx";
import Footer from "./components/footer/Footer.jsx";
import AdminAccount from "./pages/admin_panel/admin_pages/AdminAccount.jsx";
import AddBook from "./pages/admin_panel/admin_pages/AddBook.jsx";
import ManageStudents from "./pages/admin_panel/admin_pages/ManageStudents.jsx";
import IssuedBooks from "./pages/admin_panel/admin_pages/IssuedBooks.jsx";
import AllBooks from "./pages/admin_panel/admin_pages/AllBooks.jsx";
import BookIssued from "./pages/student_panel/student_pages/BooksIssued.jsx";
import StudentAccount from "./pages/student_panel/student_pages/StudentAccount.jsx";
import History from "./pages/student_panel/student_pages/History.jsx";
import Search from "./pages/student_panel/student_search/Search.jsx";
import StudentHomepage from "./pages/student_panel/student_pages/StudentHomepage.jsx";
import Feedback from "./pages/student_panel/student_pages/Feedback.jsx";
import ContactUs from "./pages/home_page/ContactUs.jsx";
import ForgetPassword from "./pages/login_page/ForgetPassword.jsx";

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App () {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="/password-reset" element={<ForgetPassword />} />
            <Route path="admin" element={<AdminPanel />} >
              <Route path="account" element={<AdminAccount />} />
              <Route path="add-book" element={<AddBook />} />
              <Route path="all-book" element={<AllBooks />} />
              <Route path="manage-std" element={<ManageStudents />} />
              <Route path="issued-book" element={<IssuedBooks />} />
            </Route>
            <Route path="student" element={<StudentPanel />} >
              <Route path="std-account" element={<StudentAccount />} />
              <Route path="history" element={<History />} />
              <Route path="home" element={<StudentHomepage />} />
              <Route path="book-issued" element={<BookIssued />} />
              <Route path="search" element={<Search />} />
              <Route path="feed-back" element={<Feedback />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
