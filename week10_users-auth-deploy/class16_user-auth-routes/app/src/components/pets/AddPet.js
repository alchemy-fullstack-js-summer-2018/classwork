import React, { PureComponent } from 'react';
import styles from './AddPet.css';
import FormControl from '../shared/FormControl';

class AddPet extends PureComponent {

  render() {

    return (
      <section className={styles['add-pet']}>
        <h2>Add a New Pet</h2>
        <form>
          <FormControl label="Name">
            <input name="name"/>
          </FormControl>
          
          <FormControl label="Type">
            <select>
              <option>cat</option>
              <option>bird</option>
              <option>lizard</option>
            </select>
          </FormControl>

          <FormControl label="Toys">
            <input type="checkbox"/>
          </FormControl>

          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default AddPet;