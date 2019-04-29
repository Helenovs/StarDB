import React, { Component} from 'react';
import SwapiService from "../../services/swapi-service";
import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import Row from '../row';


 export default class PeoplePage extends Component {
   swapiService = new SwapiService();
   state ={
     selectedPerson: 3
   }
   onPersonSelected = (id) => {
     this.setState({
       selectedPerson: id
     });
   };
   render(){
     const itemList = (
       <ItemList onItemSelected = {this.onPersonSelected}
                 getData = {this.swapiService.getAllPeople}>
          {(i) => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
     );
     const ItemDetails = (
       <ErrorBoundry>
       <ItemDetails itemId={this.state.selectedPerson}
                    getData = {this.SwapiService.getPerson}/>
       </ErrorBoundry>
     );
     return(
       <div>
         <Row left= {itemList} right = {ItemDetails}/>
         <ErrorButton />
       </div>
     );
   }
 }
