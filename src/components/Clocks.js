import React from 'react'

class Clock extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = { date: new Date() }
  //   } jodi props use kori then constructor use korbo or i wont

  state = { date: new Date() ,locale: 'bn-BD' }
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
  handleClick(ev) {
    this.setState({
        locale:'en-US'
    })
    ev.preventDefault();
    console.log('the Button Was Clicked')
  }
  render() {
    const {date,locale} = this.state
    return (
      <div>
        <h1 className='heading'>
          <span className='text'>
            Hello -{this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <button type='button' onClick={this.handleClick}>
          Click Here
        </button>
      </div>
    )
  }
}

export default Clock
