import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.modules.css';

// IMPORT COMPONENT TO USE
import swal from '@sweetalert/with-react';

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

  // send axios DELETE call
  deleteFeedback(id) {
    axios
      .delete(`/feedback/${id}`)
      .then((response) => {
        this.getFeedback();
      })
      .catch((err) => {
        console.log(`Yikes! It broke! ${err}`);
      });
  }

  handleClickDelete = (id) => (event) => {
    console.log('delete button pressed', id);
    const itemToDelete = id;
    this.deleteFeedback(itemToDelete);
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
                      <button
                        className="btn"
                        onClick={this.handleClickDelete(item.id)}
                      >
                        Delete
                      </button>
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
