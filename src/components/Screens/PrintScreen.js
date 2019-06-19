import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { PDFViewer, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import PdfDocument from './PdfDocument'

class PrintScreen extends Component {
  state = {
    numPages: null,
    pageNum: 1,
    render: false
  }

  onDocumentLoadSuccess = async (document) => {
    const { numPages } = document
    await this.setState({
      numPages,
      pageNum: 1,
      render: true
    })
  }

  changePage = (offset) => this.setState( prevState => ({
    pageNum: prevState.pageNum + offset
  }))

  prevPage = () => this.changePage(-1)

  nextPage = () => this.changePage(1)

  render() {
    const { numPages, pageNum, render } = this.state

    if ( ! render ) return null

    return (
      <Fragment>
        <PDFViewer 
          className='printable-pdf'
          width='800'
          height='600'
        >
          <Document
            file={PdfDocument}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNum={pageNum} />
          </Document>
        </PDFViewer>
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
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#e4e4e4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

// ReactDOM.render(<PrintScreen />, document.getElementById('root'))
export default PrintScreen