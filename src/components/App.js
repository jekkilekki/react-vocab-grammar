import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import './k2k.scss'
import Header from './shared/Header'
import LoginScreen from './Login/LoginScreen'
import HangulScreen from './Hangul/HangulScreen'
import HangulSingle from './Hangul/HangulSingle'
import VocabScreen from './Vocab/VocabScreen'
import VocabSingle from './Vocab/VocabSingle'
import GrammarScreen from './Grammar/GrammarScreen'
import GrammarSingle from './Grammar/GrammarSingle'
import PhrasesScreen from './Phrases/PhrasesScreen'
import PhraseSingle from './Phrases/PhraseSingle'
import Search from './Screens/Search'
import NotFound from './Screens/NotFound'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faPlusCircle )

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <LoginScreen pageTitle='Login' /> } />
            <Route exact path='/hangul' render={() => <HangulScreen pageTitle='Hangul' /> } />
            <Route exact path='/hangul/:id' render={() => <HangulSingle /> } />
            <Route exact path='/vocab' render={() => <VocabScreen pageTitle='Vocabulary' /> } />
            <Route exact path='/vocab/:id' render={() => <VocabSingle /> } />
            <Route exact path='/grammar' render={() => <GrammarScreen pageTitle='Grammar' /> } />
            <Route exact path='/grammar/:id' render={() => <GrammarSingle /> } />
            <Route exact path='/phrases' render={() => <PhrasesScreen pageTitle='Phrases' /> } />
            <Route exact path='/phrase/:id' render={() => <PhraseSingle /> } />
            <Route exact path='/search' render={(props) => <Search timestamp={new Date().toString()} {...props} /> } />
            <Route path='/search/:query' render={(props) => <Search timestamp={new Date().toString()} query={props.match.params.query} {...props} /> } />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
