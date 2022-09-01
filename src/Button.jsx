import classNames from 'classnames'
import React, { Component } from 'react'

export default class Button extends Component {

  render() {
    console.log(this.props)

    return (
      <button className={classNames('button', {'button--outline':this.props.outline})}>{this.props.children}</button>
    )
  }
}
