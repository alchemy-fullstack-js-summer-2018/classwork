import React, { Component, Fragment } from 'react';
import cowsay from 'cowsay-browser';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

class App extends Component {

  state = {
    counter: 0,
    content: 'Hellloooo!',
    cows: [],
    cow: 'default',
    url: 'https://atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Widget/Beaches_CoveBeach.jpg'
  }

  componentDidMount() {
    cowsay.list((err, cows) => {
      this.setState({ cows });
    });
  }

  handleCowSelect = (cow = 'default') => {
    this.setState({ cow });
  };

  handleContentChange = (content = ' ') => {
    this.setState({ content });
  };

  handleBackgroundChoose = (url = '') => {
    this.setState({ url });
  }

  handleExport = () => {
    dom2image.toBlob(this.image)
      .then(blob => {
        fileSaver.saveAs(blob, 'cute-cowsay.png');
      });
  }

  render() { 
    const { content, cows, cow, url } = this.state;
    
    return ( 
      <main className={styles.app}>
        <section>
          <h2>Set Options</h2>
          <Content content={content} onChange={this.handleContentChange}/>
          <SelectCow cows={cows} onSelect={this.handleCowSelect}/>
          <Background url={url} onChoose={this.handleBackgroundChoose}/>
        </section>

        <section className="cow-say">
          <h2>Behold Your Cow Say</h2>
          <p ref={node => this.image = node}>
            <CowSay content={content} cow={cow} url={url}/>
          </p>
          <p>
            <button onClick={this.handleExport}>Export</button>
          </p>
        </section>

      </main>
    );
  }
}

function CowSay({ content, cow, url }) {
  
  const cowSaid = cowsay.say({
    text: content || ' ',
    f: cow
  });

  return (
    <Fragment>
      <pre style={{ background: `url(${url})`}}>{cowSaid}</pre>
    </Fragment>
  );
}

function Background({ url, onChoose }) {
  return (
    <label>
      Background: 
      <input value={url} onChange={({ target }) => onChoose(target.value)}/>
      <input type="file" onChange={({ target }) => {
        const reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        reader.onload = () => onChoose(reader.result);
      }}/>
    </label>
  );
}

function SelectCow({ cows, onSelect }) {
  return (
    <p>
      <label>
        Cow:
        <select onChange={({ target }) => onSelect(target.value)}>
          <option value="">Choose a Cow</option>
          {cows.map(cow => (
            <option key={cow} value={cow}>{cow}</option>
          ))}
        </select>
      </label>
    </p>
  );
}

function Content({ content, onChange }) {
  return (
    <p>
      <label>
        Content: 
        <input 
          value={content} 
          onChange={({ target }) => onChange(target.value)}
        />
      </label>
    </p>
  );
}
 
export default App;