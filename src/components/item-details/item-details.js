import React, { Component } from 'react';
import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    image: null,
    loading: true,
    error: false
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

// second solution
  onItemLoaded = (item) => {
    this.setState({
      item,
      image: this.props.getImageUrl(item),
      loading: false
    });
  };
  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    };
    getData(itemId)
    .then(this.onItemLoaded)
    .catch(this.onError);
  }

  render () {
    if (!this.state.item) {
      return <span>Select an item from a list</span>;
    }
    const { item, loading, error, image } = this.state;
    console.log("IMAGE", image);
    const errorMessage = error? <ErrorIndicator /> : null;
    const spinner = loading? <Spinner /> : null;
    const content = !(error || loading)? <ItemView item= { item }
                                                  image={ image } /> : null;
    return (
      <div className="person-details card">
        { spinner }
        { errorMessage }
        { content }
      </div>
    );
  }
};
const ItemView = ( {item, image} ) => {
  console.log("ITEMM", item);
  // console.log("IMAGE", image);
  const { id, name, gender,
          birthYear, eyeColor } = item;
  return(
    <React.Fragment>
      <img className="person-image" src={image} alt="character"/>
      <div className="card-body">
        <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth year</span>
              <span>{ birthYear }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color</span>
              <span>{ eyeColor }</span>
            </li>
          </ul>
      </div>
    </React.Fragment>
  );

};
export default ItemDetails;
