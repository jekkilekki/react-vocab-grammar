import React, { Component } from 'react'
import { PDFViewer, Document, Page, Text, View, Image, Font, StyleSheet } from '@react-pdf/renderer'
import { createArraySubsets } from '../../utils/helpers'

class Flashcards extends Component {
  render() {
    const { data } = this.props.location.state
    let rowData = createArraySubsets( data, 3 )

    return(
      <PDFViewer className='printable-pdf'>
      <Document size='A4' orientation='portrait'>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            ~ Created with react-pdf ~
          </Text>
          {console.log('Flashcards data: ', this.props.location.state.data)}
          { rowData && 
            rowData.map((row, i) => (
              <View key={i} style={styles.cardRow}>
                { row.map(card => (
                  <View key={card.id} style={styles.card}>
                    <Text style={styles.title}>{card.korean}</Text>
                    <Text style={styles.author}>{card.english}</Text>
                  </View>
                ))}
              </View>
            ))
          }
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </Page>

        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            ~ Created with react-pdf ~
          </Text>
          { rowData &&
            rowData.map((row, i) => (
              <View key={i} style={styles.cardRowReverse}>
                { row.map( card => (
                  <View style={styles.card}>
                    <Image
                      style={styles.image}
                      src={card.imageUrl}
                    />
                  </View>
                ))}
              </View>
            ))
          }
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </Page>
      </Document>
      </PDFViewer>
    )
  }
}

Font.register({
  family: 'NotoSansKR',
  // src: 'https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf',
  src: 'assets/fonts/NotoSansKR-Regular.ttf'
});

Font.register({ family: "Nanum Gothic", src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-ExtraBold.ttf", });


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  card: {
    width: '33%',
    height: 140,
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'gray',
    position: 'relative',
  },
  image: {
    margin: '5% auto',
    width: '90%',
    height: '90%',
    objectFit: 'cover'
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardRowReverse: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  title: {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'Nanum Gothic', 
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    // marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// ReactDOM.render(<Flashcards />, document.getElementById('root'));
export default Flashcards