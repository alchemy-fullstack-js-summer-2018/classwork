import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getPetById } from './reducers';
import { loadPet } from './actions';

class PetDetail extends PureComponent {

  static propTypes = {
    loadPet: PropTypes.func.isRequired,
    match: PropTypes.object,
    pet: PropTypes.object,
  };

  componentDidMount() {
    const { loadPet, match } = this.props;
    loadPet(match.params.id);
  }

  render() {
    const { pet, match } = this.props;
    if(!pet || !pet.favoriteToys) return null;
    const { url } = match;
    
    return (
      <article>
        <h3>{pet.name} the {pet.type}</h3>
        {/* <div>
          <Link to={`${url}/paragraph`}>paragraph view</Link>
          &nbsp;
          <Link to={`${url}/list`}>list view</Link>
        </div> */}

        <Switch>
          <Route path={`${url}/paragraph`} render={() => {
            return <ParagraphView toys={pet.favoriteToys}/>;
          }}/>

          <Route path={`${url}/list`} render={() => {
            return <ListView toys={pet.favoriteToys}/>;
          }}/>
          
          <Redirect to={`${url}/list`}/>
        </Switch>
          
      </article>
    );
  }
}

const ParagraphView = ({ toys }) => (
  <p>Favorite Toys are {toys.join(', ')}</p>
);
ParagraphView.propTypes = { toys: PropTypes.array };

const ListView = ({ toys }) => (
  <ul>
    {toys.map((toy, i) => <li key={i}>{toy}</li>)}
  </ul> 
);
ListView.propTypes = { toys: PropTypes.array };

export default connect(
  (state, { match }) => ({ 
    pet: getPetById(state, match.params.id)
  }),
  { loadPet }
)(PetDetail);