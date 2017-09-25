## THREE PRINCIPLES OF REDUX

* The state of your whole application is stored in an object tree within a single store.
* The only way to change the state is to emit an action, an object describing what happened.
* To specify how the state tree is transformed by actions, you write pure reducers.
* http://redux.js.org/docs/introduction/ThreePrinciples.html


## The Store has the following responsibilities:

* Holds application state;
* Allows access to state via getState();
* Allows state to be updated via dispatch(action);
* Registers listeners via subscribe(listener);
* Handles unregistering of listeners via the function returned by subscribe(listener).


## The root reducer may combine the output of multiple reducers into a single state tree.

How you structure the root reducer is completely up to you. Redux ships with a combineReducers() helper function, useful for “splitting” the root reducer into separate functions that each manage one branch of the state tree.

While combineReducers() is a handy helper utility, you don't have to use it; feel free to write your own root reducer!

http://redux.js.org/docs/basics/DataFlow.html


## Dispatch

Actions are passed into the dispatch method. The dispatch is a funnel that sends each action to all reducers.
