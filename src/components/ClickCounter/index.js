import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  press = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state

    return (
      <div className="background">
        <h1 className="heading">
          The Button has been clicked <span className="span-item">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <div>
          <button className="button" onClick={this.press}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
