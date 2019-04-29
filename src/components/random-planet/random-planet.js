import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './random-planet.css';
class  RandomPlanet extends Component {
  swapiService = new SwapiService();
  constructor(){
    super();
    console.log('constructor');
    this.state = {
      planet: {},
      loading: true,
      error: false
    };
    // this.updatePlanet();
    const interval = setInterval(this.updatePlanet, 5000);

  }
  componentDidMount() {
    console.log("component Did mount");
  }
  componentWillUnmount() {
    console.log("clearInterval");
    clearInterval(this.interval);

  }
  onPlanetLoaded = (planet) => {
    this.setState({planet,
                  loading: false});
  }
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };
  updatePlanet = () => {
    console.log('update');
    const id =Math.floor(Math.random()*25)+2;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);


  }
  render(){
    console.log('Render');
    const { planet, loading, error } = this.state;
    const errorMessage = error? <ErrorIndicator /> : null;
    const spinner = loading? <Spinner /> : null;
    const content = !(loading || error) ? <PlanetView planet={ planet } /> : null;
    // if (loading) {
    //   return <Spinner />
    // }

    return(
      <div className="random-planet jumbotron rounded">
      { errorMessage }
      { spinner }
      { content }
      </div>

    );
  }

};
const PlanetView =({ planet }) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return(
    <React.Fragment>
    <img className="planet-image" src={`http://starwars-visualguide.com/assets/img/planets/${id}.jpg` } alt={`Image of ${name}`} />
    <div>
      <h4>{ name }</h4>
      <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span className="term">Population</span>
        <span>{ population }</span>
      </li>

        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>{ rotationPeriod }</span>
        </li>

        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>{ diameter }</span>
        </li>
        </ul>
    </div>
    </React.Fragment>
  );
};
export default RandomPlanet;