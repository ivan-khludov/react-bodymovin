const React = require('react')
const isDOM = typeof window === 'object' && typeof window.document === 'object'

function ReactBodymovinImpl (bodymovin) {
  class ReactBodymovin extends React.Component {
    componentDidMount () {
      if (isDOM) {
        const options = Object.assign({}, this.props.options)
        options.wrapper = this.wrapper
        options.renderer = 'svg'
        this.animation = bodymovin.loadAnimation(options)
      }
    }

    componentWillUnmount () {
      if (isDOM) {
        this.animation.destroy()
      }
    }

    shouldComponentUpdate () {
      return false
    }

    render () {
      const storeWrapper = (el) => {
        this.wrapper = el
      }

      return (
        <div className='react-bodymovin-container' ref={storeWrapper}>
          { this.props.children }
        </div>
      )
    }
  }

  return ReactBodymovin
}

module.exports = ReactBodymovinImpl
