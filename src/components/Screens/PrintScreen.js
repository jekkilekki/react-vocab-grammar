import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import PdfDocument from './PdfDocument'

const PrintScreen = () => (
  <PDFViewer>
    <h1>Print this!</h1>
    <PdfDocument />
  </PDFViewer>
)

export default PrintScreen