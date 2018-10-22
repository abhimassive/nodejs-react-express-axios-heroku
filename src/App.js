import React, { Component } from 'react'
import './App.css'
import Output from './Components/output'
import Type from './Components/Controls/type'
import Paras from './Components/Controls/paras'
import Length from './Components/Controls/length'
import axios from 'axios'
const proxyURL = 'https://cors.io/?'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paras: 2,
      length: 'short',
      type: 'plaintext',
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText()
  }

  getSampleText() {
    axios.get(proxyURL +
      'https://loripsum.net/api/' +
      this.state.paras + '/' +
      this.state.length + '/' +
      this.state.type)
      .then((response) => {
        this.setState({ text: response.data }, function () {
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText)
  }

  changeLength(l) {
    this.setState({ length: l }, this.getSampleText)
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
            <label>Paragraphs (0 - 99)</label>
            <Paras value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
          <div className='form-group'>
            <label>Format</label>
            <Type value={this.state.type} onChange={this.showType.bind(this)} />
          </div>
          <div className='form-group'>
            <label>Length</label>
            <Length value={this.state.length} onChange={this.changeLength.bind(this)} />
          </div>
        </form>
        <br></br>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App