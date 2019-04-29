
// <PeoplePage />
// <div className="row mb2">
//   <div className="col-md-6">
//     <ItemList onItemSelected = {this.onPersonSelected}
//               getData = {this.swapiService.getAllPlanets}>
//       {(i) => (<span>{i.name}<button>i</button></span>)}
//     </ItemList>
//   </div>
//   <div className="col-md-6">
//     <ItemDetails personId={this.state.selectedPerson}/>
//   </div>
// </div>
//
// <div className="row mb2">
//   <div className="col-md-6">
//     <ItemList onItemSelected = {this.onPersonSelected}
//               getData = {this.swapiService.getAllStarShip}>
//       {(i) => i.name}
//     </ItemList>
//   </div>
//   <div className="col-md-6">
//     <ItemDetails personId={this.state.selectedPerson}/>
//   </div>
// </div>


// item-details.js
/////////////////////first solution/////////////////////
//   updatePerson() {
//     const { personId } = this.props;
//     if (!personId) {
//       return;
//     }
//     this.swapiService
//     .getPerson(personId)
//     .then((person) => {
//       this.setState({person});
//     })
//   }
//
//
//   render () {
//     if (!this.state.person) {
//       return <span>Select a person from a list</span>;
//     }
//     const { id, name, gender,
//             birthYear, eyeColor } = this.state.person;
//     return (
//       <div className="person-details card">
//         <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="character"/>
//         <div className="card-body">
//           <h4>{ name }</h4>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">
//                 <span className="term">Gender</span>
//                 <span>{ gender }</span>
//               </li>
//               <li className="list-group-item">
//                 <span className="term">Birth year</span>
//                 <span>{ birthYear }</span>
//               </li>
//               <li className="list-group-item">
//                 <span className="term">Eye color</span>
//                 <span>{ eyeColor }</span>
//               </li>
//             </ul>
//         </div>
//       </div>
//     );
//   }
// };
//
// export default ItemDetails;
