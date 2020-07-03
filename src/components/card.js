import React, { Component } from 'react'

class card extends Component {
        render() {
                return (
                        <div className = {this.props.className} title = {this.props.name} onClick = {this.props.onclick} style = {this.props.style}>
                        </div>
                )
        }
}

export default card;