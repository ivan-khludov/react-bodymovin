# react-bodymovin

A very simple [React][] wrapper for the awesome [bodymovin][] library.

Does the bare minimum to embed an animation within a React application at the moment. If more things are required they can be added later.

## Usage

```js
import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import animation from './animation.json'

const App = () => {
  const bodymovinOptions = {
    animType: 'svg',
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  )
}

export default App
```

[react]: https://facebook.github.io/react/
[bodymovin]: https://github.com/bodymovin/bodymovin
