import React, { Component, PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends PureComponent {
  state = { 
    name: 'felix',
    color: 'black'
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() { 
    const { name, color } = this.state;

    return (
      <section>
        <p>
          name: <input name="name" value={name} onChange={this.handleChange}/>
        </p>
        <p>
          color: <input name="color" value={color} onChange={this.handleChange}/>
        </p>
        
        <ChildComponent name={name}/>

        <WithRouterDisplay>
          <span>{name}</span>
        </WithRouterDisplay>

        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>

          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>

          <TabPanel>
            <h2>New Tab</h2>
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}

class Display extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
  };

  render() {
    const { children, location } = this.props;
    console.log(children);
    return (
      <div>
        <h3>Display Component</h3>
        {children}
        <div>{location.pathname}</div>
      </div>
    );
  }
}

const WithRouterDisplay = withRouter(Display);

class ChildComponent extends PureComponent {
  static propTypes = {
    name: PropTypes.string
  };

  // shouldComponentUpdate(props) {
  //   return props.name !== this.props.name;
  // }

  render() {
    const { name } = this.props;
    console.log('ChildComponent render()');
    return (
      <p>
        Name: {name}
      </p>
    );
  }
}
 
export default Home;