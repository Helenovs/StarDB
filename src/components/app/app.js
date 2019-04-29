import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './app.css';
class App extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 5,
    hasError: false
  };
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };
  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return < ErrorIndicator />
    }
    const {getPerson, getStarShip} = this.swapiService;
    const personDetails = (
      <ItemDetails itemId = {11}
                   getData = {getPerson} />
    );
    const starshipDetails = (
      <ItemDetails itemId = {5}
                   getData = {getStarShip} />
    );
    return(
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <ErrorButton />
          <Row
            left={personDetails}
            right={starshipDetails}
          />


        </div>
      </ErrorBoundry>
    );
  }
};
export default App;
