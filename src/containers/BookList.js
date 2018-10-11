import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import selectBook from '../actions/index';

export class BookList extends Component {
  static propTypes = {};

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.id} onClick={() => this.props.selectBook(book)} className="list-group-item">
          <a href="!#">{book.title}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

// Anything returned from this function will end up as props on the BookList container [ this.prop.selectBook ]
const mapDispatchToProps = (dispatch) => {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
};

// Promote Booklist from a components to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
