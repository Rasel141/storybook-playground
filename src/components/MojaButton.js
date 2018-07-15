import React, { Component } from 'react'

class MojaButton extends Component {
  render () {
    return (
      <button
        style={{
          backgroundColor: 'pink',
          border: 'none',
          width: '124px',
          height: '33px',
          borderRadius: '15px',
          color: '#7c7c00',
          fontSize: '16px'
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

export { MojaButton }
