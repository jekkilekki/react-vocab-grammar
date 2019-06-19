import React from 'react'
import ReactDOM from 'react-dom'
// import ReactPDF, {  } from '@react-pdf/renderer'
import { PDFViewer, Document, Page, Text, View, Image, Font, StyleSheet } from '@react-pdf/renderer'

const Flashcards = (props) => (
  <PDFViewer className='printable-pdf'>
  <Document size='A4' orientation='portrait'>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      {console.log(props.location)
        // props.navigation.state.data.map((card, i) => (
        //   <View style={styles.card}>
        //     <Text style={styles.title}>{card.korean}</Text>
        //     <Text style={styles.author}>{card.english}</Text>
        //   </View>
        // ))
      }
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
      </View>
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Don Quijote de la Mancha</Text>
          <Text style={styles.author}>Miguel de Cervantes</Text>
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <View style={styles.cardRowReverse}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.pexels.com/photos/2450122/pexels-photo-2450122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://i0.wp.com/i.redd.it/kpdoblsdkd8z.png?w=600"
          />
        </View>
      </View>
      <View style={styles.cardRowReverse}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.pexels.com/photos/2450122/pexels-photo-2450122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://i0.wp.com/i.redd.it/kpdoblsdkd8z.png?w=600"
          />
        </View>
      </View>
      <View style={styles.cardRowReverse}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.pexels.com/photos/2450122/pexels-photo-2450122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://i0.wp.com/i.redd.it/kpdoblsdkd8z.png?w=600"
          />
        </View>
      </View>
      <View style={styles.cardRowReverse}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.pexels.com/photos/2450122/pexels-photo-2450122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://i0.wp.com/i.redd.it/kpdoblsdkd8z.png?w=600"
          />
        </View>
      </View>
      <View style={styles.cardRowReverse}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://images.pexels.com/photos/2450122/pexels-photo-2450122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            src="https://i0.wp.com/i.redd.it/kpdoblsdkd8z.png?w=600"
          />
        </View>
      </View>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
  </PDFViewer>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

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
    paddingTop: 15,
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
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
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
  image: {
    // marginVertical: 15,
    // marginHorizontal: 100,
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

ReactDOM.render(<Flashcards />, document.getElementById('root'));
export default Flashcards