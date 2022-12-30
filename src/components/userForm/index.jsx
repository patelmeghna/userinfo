import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-date-picker";
import AvatarInput from "./AvatarInput";
import countries from "./Countries";
import axios from "axios";

const UserForm = () => {
  const [value, setValue] = useState(""),
    [file, setFile] = useState(""),
    [fileName, setFileName] = useState(""),
    [fullName, setFullName] = useState(""),
    [email, setEmail] = useState(""),
    [country, setCountry] = useState("");

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };

  async function postData(e) {
    e.preventDefault();

    let payload = { name: fullName, email: email, date: value, country: country, image: fileName };

    await axios
      .post("https://retoolapi.dev/UvU3e4/user", payload, axiosConfig)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container className="info-form-wrap">
      <Form className="info-form" onSubmit={postData}>
        <div className="form-header">
          <h3 className="form-title">Add User</h3>
        </div>
        <Row className="gy-4 form-input-body">
          <Col lg="3">
            <Form.Label>Avatar</Form.Label>
            <AvatarInput
              file={file}
              setFile={setFile}
              fileName={fileName}
              setFileName={setFileName}
            />
          </Col>

          <Col lg="9">
            <Row className="gy-4">
              <Col lg="6">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  placeholder="John Doe"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Col>
              <Col lg="6">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@company.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <Col lg="6">
                <Form.Label>DOB</Form.Label>
                <DatePicker
                  onChange={setValue}
                  value={value}
                  className="form-control"
                  autoFocus={false}
                  maxDate={new Date()}
                  calendarClassName="calendar-box"
                />
              </Col>
              <Col lg="6">
                <Form.Label>Country</Form.Label>
                <Form.Select onChange={(e) => setCountry(e.target.value)}>
                  <option value="">--- Select Country ---</option>
                  {countries.map((coun) => {
                    return <option key={coun.code} value={coun.code}>{coun.name}</option>;
                  })}
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <button
              type="submit"
              className="btn btn-primary float-end"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default UserForm;
