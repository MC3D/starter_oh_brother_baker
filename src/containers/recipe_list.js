import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes } from './../actions/index';
import RecipeListItem from './recipe_list_item';
import $ from 'jquery';
// import $ from 'jquery';
// import { PARSE_BASE_URL, PARSE_HEADERS } from './../utility/parse';

class RecipeList extends Component {

  constructor() {
    super();
    this._handleNewRecipe = this._handleNewRecipe.bind(this);
  }
  componentDidMount() {
    this.props.fetchRecipes();
  }

  _handleNewRecipe() {
    let recipe = {
      name: 'something yummy'
    }

    console.log(recipe);
    return;

  }

  render() {
    let recipeItems = this.props.recipes.map((recipe)=>{
      return <RecipeListItem key={recipe.objectId} recipe={recipe} />
    })
    return (
      <div>
        <div>{ recipeItems }</div>
        <input type='button' onClick={ this._handleNewRecipe } />
      </div>


    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes }, dispatch);
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
