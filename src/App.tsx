import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import HomePage from "./components/HomePage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  withAuthenticator,
  Button,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsExports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  const { signOut } = useAuthenticator();
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">Image Gallery App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/uploadImage">Upload Image</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={signOut}>Sign out</Button>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Route path="/uploadImage" exact component={UploadImage} /> */}
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
