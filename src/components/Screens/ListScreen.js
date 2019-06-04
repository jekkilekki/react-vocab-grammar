import React, { Component } from 'react'

class ListScreen extends Component {
  render() {
    return (
      <table className="list">
        {this.props.data.map(item => (
          <tr>
            <td>{item.title}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </table>
    )
  }
}

export default ListScreen