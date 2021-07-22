import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import './k2k.scss'
import Header from './shared/Header'
import LoginScreen from './Screens/LoginScreen'
import AddScreen from './Screens/AddScreen'
import SingleScreen from './Screens/SingleScreen'
// import HangulSingle from './Hangul/HangulSingle'
// import VocabSingle from './Vocab/VocabSingle'
// import GrammarSingle from './Grammar/GrammarSingle'
// import PhraseSingle from './Phrases/PhraseSingle'
import Search from './Screens/Search'
import NotFound from './Screens/NotFound'
// import PrintScreen from './Screens/PrintScreen'
// import Quixote from './Screens/Quixote'

import { checkAuthStatus } from '../stateManagement/actions'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, faPlusCircle, faMinusCircle, 
  faPencilAlt, faTrashAlt, faFilePdf, faSave, faTimes, 
  faAngleDown, faHistory, faPlus
} from '@fortawesome/free-solid-svg-icons'
import Flashcards from './Screens/FlashCards';

library.add( faHome, faPlusCircle, faMinusCircle, faPencilAlt, faTrashAlt, faFilePdf, faSave, faTimes, faAngleDown, faHistory, faPlus )

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStatus()
  }

  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Header />
          <Switch>
            {/* { !isAuthenticated && */}
              <Route exact path='/' render={() => <LoginScreen pageTitle='Login' /> } />
            {/* }
            { isAuthenticated && 
              <Route exact path='/' render={() => <LoginScreen pageTitle='Home' /> } />
            } */}
            <Route exact path='/hangul' render={() => <AddScreen pageTitle='Hangul' /> } />
            <Route exact path='/hangul/:id' render={() => <SingleScreen /> } />
            <Route exact path='/letters' render={() => <AddScreen pageTitle='Letter' /> } />
            <Route exact path='/letter/:id' render={() => <SingleScreen /> } />
            <Route exact path='/vocab' render={() => <AddScreen pageTitle='Vocabulary' /> } />
            <Route exact path='/vocab/:id' render={() => <SingleScreen /> } />
            <Route exact path='/grammar' render={() => <AddScreen pageTitle='Grammar' /> } />
            <Route exact path='/grammar/:id' render={() => <SingleScreen /> } />
            <Route exact path='/phrases' render={() => <AddScreen pageTitle='Phrases' /> } />
            <Route exact path='/phrase/:id' render={() => <SingleScreen /> } />
            <Route exact path='/passages' render={() => <AddScreen pageTitle='Passages' /> } />
            <Route exact path='/passage/:id' render={() => <SingleScreen /> } />
            <Route exact path='/search' render={(props) => <Search timestamp={new Date().toString()} {...props} /> } />
            {/* <Route exact path='/print' render={() => <PrintScreen /> } /> */}
            {/* <Route exact path='/quixote' render={() => <Quixote /> } /> */}
            <Route exact path='/flashcards/:id' render={(props) => <Flashcards {...props} /> } />
            <Route path='/search/:query' render={(props) => <Search timestamp={new Date().toString()} query={props.match.params.query} {...props} /> } />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { loggedIn: app.loggedIn }
}

export default connect(mapStateToProps, { checkAuthStatus })(App)
