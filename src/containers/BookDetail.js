import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class BookDetail extends Component {
  static propTypes = {};

  render() {
    const activeBook = this.props.activeBook;
    if (!activeBook) {
      return (
        <div className="book-detail">
          <h1>Book Detail!</h1>
          <h5>No Book Selected</h5>
        </div>
      );
    }
    const { id, title } = activeBook;
    return (
      <div className="book-detail">
        <h1>Book Detail!</h1>
        <h3>Book ID: {id}</h3>
        <h3>Book Title: {title}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeBook: state.activeBook,
  };
};

export default connect(mapStateToProps)(BookDetail);
