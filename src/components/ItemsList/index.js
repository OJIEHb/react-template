import React, { Component } from 'react';
import Item from '@components/Item';

export default class ItemsList extends Component {

  render() {
    const { items } = this.props;
    return (
      <div>
        { items && items.map(item => <Item item={ item } key={ item.id }/>) }
      </div>
    );
  }
}
