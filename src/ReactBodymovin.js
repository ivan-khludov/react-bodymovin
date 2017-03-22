import React from 'react'
import bodymovin from 'bodymovin'

class ReactBodymovin extends React.Component {
  componentDidMount () {
    const options = Object.assign({}, this.props.options)
    options.wrapper = this.wrapper
    this.animation = bodymovin.loadAnimation(options)
  }

  componentWillUnmount () {
    this.animation.destroy()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const storeWrapper = (el) => {
      this.wrapper = el
    }

    return <div className='react-bodymovin-container' ref={storeWrapper} />
  }
}

ReactBodymovin.propTypes = {
  options: React.PropTypes.object.isRequired
}

export default ReactBodymovin
