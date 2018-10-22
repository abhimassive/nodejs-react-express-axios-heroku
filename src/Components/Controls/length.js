import React, { Component } from 'react'

class Length extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value }, function () {
      this.props.onChange(this.state.value)
    })
  }

  render() {
    return (
      <div>
        <select className='form-control' onChange={this.onChange.bind(this)}>
          <option value='short'>Short</option>
          <option value='medium'>Medium</option>
          <option value='long'>Long</option>
          <option value='verylong'>Very Long</option>
        </select>
      </div>
    )
  }
}

export default Length