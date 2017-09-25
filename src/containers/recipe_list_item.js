import React, { Component } from 'react';

export default class RecipeListItem extends Component {

  render() {
    let recipe = this.props.recipe;
    return (
      <div>{ recipe.name }</div>
    )
  }
}
