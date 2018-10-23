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
      length: 'medium',
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
        <div id="header">
          <h3>Loren Ipsum Text Generator</h3>
          <h6>A Sample Text Generator built in NodeJs</h6>
          <hr />
          <hr />
        </div>
        <div id="body">
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
        <div id="footer">
          <p>Developed by: Abhi</p>
          <p>Contact information: <a href="mailto:abhi358@gmail.com">abhi358@gmail.com</a></p>
          <p>GitHub Repo: <a href="https://github.com/abhimassive/nodejs-react-express-axios-heroku">Click Here</a></p>

        </div>

      </div>
    );
  }
}

export default App