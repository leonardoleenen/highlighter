import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notebook from './components/notebook/index'

import './styles/tailwind.scss'
import './styles/main.scss'
import {AppState} from './redux/store'
import {SelectionState, AddAction, RemoveAction, CleanAction} from './services/types'
import {connect} from 'react-redux'


class App extends React.Component {

  constructor(props:any){
    super(props)
  }

  render(){
    return(
    <div className="App">
    <Notebook> </Notebook>
  </div>)
  }
}

const mapStateToProps = (state: AppState) => ({
  selection: state.selection
})

const mapDispatchToProps = (dispatch: AddAction | RemoveAction | CleanAction) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
