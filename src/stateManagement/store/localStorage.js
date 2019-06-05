export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('k2kcards')
    if ( serializedState === null ) {
      return undefined
    }
    return JSON.parse( serializedState )
  } catch (e) {
    console.log( 'Error LOADING application state.', e )
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify( state )
    localStorage.setItem( 'k2kcards', serializedState )
  } catch (e) {
    console.log( 'Error SAVING application state.', e )
  }
}