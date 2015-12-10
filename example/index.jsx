import React, { Component } from 'react'
import TrixEditor from '../src/react-trix'

class App extends Component {
  state = {
    html: '<b>Edit me</b>'
  }

  _handleChange = ({target: {innerHTML}}) => {
    this.setState({html: innerHTML})
  }

  render() {
    const { html } = this.state
    
    return(
      <div>
        <TrixEditor
          value={html}
          onChange={this._handleChange}
        />
        <div>
          html: {html}
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('app'));
