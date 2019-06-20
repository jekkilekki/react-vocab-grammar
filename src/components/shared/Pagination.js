import React, { Component } from 'react'

class Pagination extends Component {
  state = {
    itemsPerPage: null,
    numPages: null,
    pageNum: 1
  }

  // onDocumentLoadSuccess = async (document) => {
  //   const { numPages } = document
  //   await this.setState({
  //     numPages,
  //     pageNum: 1
  //   })
  // }

  componentWillMount() {
    
  }

  changePage = (offset) => this.setState( prevState => ({
    pageNum: prevState.pageNum + offset
  }))

  prevPage = () => this.changePage(-1)

  nextPage = () => this.changePage(1)

  render() {
    const { pageNum, numPages } = this.state

    return (
      <div>
        <p>
          Page {pageNum || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type='button'
          disabled={pageNum <= 1}
          onClick={this.prevPage}
        >
          Previous
        </button>
        <button
          type='button'
          disabled={pageNum >= numPages}
          onClick={this.nextPage}
        >
          Next
        </button>
      </div>
    )
  }
}

export default Pagination