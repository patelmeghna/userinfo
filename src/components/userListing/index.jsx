import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const UserListing = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://retoolapi.dev/s9TiRL/user`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <Container className="info-form-wrap">
      <div className="info-form">
        <div className="form-header">
          <h3 className="form-title">User Listing</h3>
        </div>

        <div className="form-input-body">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {APIData.map((data) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>
                      <img src={data.image} alt="" width="80px" />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.date}</td>
                    <td>{data.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
};

export default UserListing;
