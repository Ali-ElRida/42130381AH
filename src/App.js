import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AppointmentBooking from "./pages/AppointmentBooking";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import UploadDocs from './pages/UploadFiles';
import Payment from './pages/Payments';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          />
          <Route path="/appointment-booking" element={
            <ProtectedRoute>
              <AppointmentBooking />
            </ProtectedRoute>
          }
          />
          
          <Route
            path="/upload-docs"
            element={
              <ProtectedRoute>
                <UploadDocs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
