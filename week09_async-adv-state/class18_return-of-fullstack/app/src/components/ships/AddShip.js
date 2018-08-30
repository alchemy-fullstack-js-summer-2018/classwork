import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addShip } from './actions';
import styles from './AddShip.css';

class AddShip extends PureComponent {

  handleSubmit = event => {
    event.preventDefault();
    const { target: { elements } } = event;
    const { name, sails, features } = elements;

    const { addShip, history } = this.props;
    
    addShip({
      name: name.value,
      sails: sails.value,
      features: features.value.split('\n')
    })
      .then(({ _id }) => {
        history.push(`/ships/${_id}`);
      });
  };

  render() {
    return (
      <section className={styles['add-ship']}>
        <h4>Add a Ship</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <div>Name:</div>
              <input name="name" required/>
            </label>
          </div>
          
          <div>
            <label>
              <div>Sails:</div>
              <input name="sails" required type="number"/>
            </label>
          </div>
          
          <div>
            <label>
              <div>Features (one per line):</div>
              <textarea name="features"></textarea>
            </label>
          </div>

          <div>
            <label>
              <div>
                <button>Add Ship</button>
              </div>
            </label>
          </div>

        </form>
      </section>
    );
  }
}

export default withRouter(connect(
  null,
  { addShip }
)(AddShip));
