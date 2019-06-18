import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

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

const PdfDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.section}>
        <Text>Hello again, World</Text>
      </View>
    </Page>
  </Document>
)

export default PdfDocument