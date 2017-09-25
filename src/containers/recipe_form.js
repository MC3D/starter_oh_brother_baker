import React, {Component} from 'react';
import {TrashcanIcon} from 'react-octicons'

class Ingredient extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="ingredient" name='ingredient' onChange={(event) => this.props.updateIngredient(event, this.props.index)} />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-default">-</button>
        </div>
      </div>
    )
  }
}

class Step extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [{}]
    }
    this._updateIngredient = this._updateIngredient.bind(this);
  }

  _updateIngredient(event, index) {
    let ingredients = this.state.ingredients;
    ingredients[index].ingredient = event.target.value;
    this.props.updateIngredients(index, ingredients);
  }

  render() {
    let ingredients = this.state.ingredients.map((ingredient, index) => {
      return (<Ingredient key={index} ingredient={ingredient} index={index} updateIngredient={this._updateIngredient} />)
    })
    return (
      <div>
        {ingredients}
        <div className="form-group">
          <button type="button" className="btn btn-default">+</button>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Notes" name='notes' onChange={(event) => this.props.updateNote(event, this.props.index)}/>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-default">delete step</button>
        </div>
      </div>
    )
  }
}

export default class RecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {},
      steps: [{}]
    }
    this._addStep = this._addStep.bind(this);
    this._updateNote = this._updateNote.bind(this);
    this._updateIngredients = this._updateIngredients.bind(this);
  }

  _addStep() {
    let steps = this.state.steps;
    steps.push({});
    this.setState({steps});
  }

  _updateNote(event, index) {
    let steps = this.state.steps;
    steps[index].notes = event.target.value;
    this.setState({steps});
  }

  _updateIngredients(index, ingredients) {
    let steps = this.state.steps;
    steps[index].ingredients = ingredients;
    this.setState({steps});
    console.log(this.state.steps);
  }

  render() {
    let steps = this.state.steps.map((step, index) => {
      return (<Step key={index} step={step} index={index} updateNote={this._updateNote} updateIngredients={this._updateIngredients}/>)
    });
    return (
      <form className="form well col-md-6" onSubmit={this._saveRecipe}>
        <div className="form-group">
          <h3>
            <span>BASIC INFO</span><TrashcanIcon className='pull-right cursor-pointer'/></h3>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Recipe Name" name='name'/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="By" name='by'/>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" onChange={this._togglePermissions}/>
            Make it Public
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            Keep it Private
          </label>
        </div>
        <div className="form-group">
          <select className="form-control" name='category'>
            <option>Recipe Category</option>
            <option>Appetizer</option>
            <option>Breakfast</option>
            <option>Dessert</option>
            <option>Dinner</option>
            <option>Lunch</option>
            <option>Snack</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Prep Time" name='prep'/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Cook Time" name='cook'/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Cook Temp" name='temp'/>
        </div>
        <div className="form-group">
          <select className="form-control" name='degrees'>
            <option>F</option>
            <option>C</option>
          </select>
        </div>
        <div className="form-group">
          <span>This recipe will make</span>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Amount" name='amount'/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="cookies, loaves, etc" name='type'/>
        </div>

        {steps}

        <div className="form-group">
          <button type="button" onClick={this._addStep} className="btn btn-default">add another step</button>
        </div>
        <div className="form-group">
          <h3>PERSONAL NOTES</h3>
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="3" name='notes'></textarea>
        </div>
        <button type="submit" className="btn btn-default">Save this Recipe!</button>
      </form>
    )
  }
}
