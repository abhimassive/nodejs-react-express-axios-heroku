import React, { Component } from 'react';
import './App.css';
import Output from "./Components/output";
import Select from './Components/Controls/select'
import Text from './Components/Controls/text';
import axios from 'axios'
const proxyURL = 'https://cors.io/?'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paras: 2,
      type: 'plaintext',
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText()
  }

  getSampleText() {
    axios.get(proxyURL + 'https://loripsum.net/api/' + this.state.paras + '/' + this.state.type)
      .then((response) => {
        this.setState({ text: response.data }, function () {
          // console.log(response.data)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText);
  }

  showType(x) {
    this.setState({ type: x }, this.getSampleText)
  }

  render() {
    return (
      <div className="App container">
        <h1>ReactJS Sample Text Generator</h1>
        <hr />
        <hr />
        <form className='form-inline'>
          <div className="form-group">
            <label>Paragraphs</label>
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
          <div className='form-group'>
            <label>Format</label>
            <Select value={this.state.type} onChange={this.showType.bind(this)} />
          </div>
        </form>
        <br></br>

        <Output value={this.state.text} />


      </div>
    );
  }
}

export default App;