import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemsList from '@components/ItemsList';
import { getItemsList } from '@actions';

class Items extends Component {

  componentDidMount() {
    const { loadItems } = this.props;
    loadItems();
  }

  render() {
    const { items } = this.props;
    return (<ItemsList items={ items }/>);
  }
}

const mapStateToProps = state => {
  const { items } = state;
  return { items: items.itemsList };
};


const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(getItemsList())
});

// prettier-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Items));
