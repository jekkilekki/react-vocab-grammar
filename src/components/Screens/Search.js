import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle || 'Search'}</h1>
      </div>
    )
  }
}

export default Search