import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.modules.css';

class Admin extends Component {
  //GET call - to retrieve DB stored information
  componentDidMount() {
    this.getFeedback();
  }
  getFeedback = () => {
    axios
      .get('/feedback')
      .then((response) => {
        const feedback = response.data;
        console.log(feedback);
        this.props.dispatch({
          type: 'SET_ADMIN_DATA',
          payload: feedback,
        });
      })
      .catch((err) => {
        console.log(`Something didn't work. ${err}`);
      });
  };

  render() {
    return (
      <div className="container-admin">
        <h1 style={{ color: 'white' }}>Admin View</h1>
        <br />
        <div>
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            className="table-set table-border"
          >
            <thead className="table-head">
              <tr>
                <th>Feeling</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comments</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.adminData.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.feeling}</td>
                    <td>{item.understanding}</td>
                    <td>{item.support}</td>
                    <td>{item.comments}</td>
                    <td>
                      <button className="btn">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapPropsToStore = (store) => {
  return {
    adminData: store.adminReducer,
  };
};
export default connect(mapPropsToStore)(Admin);
