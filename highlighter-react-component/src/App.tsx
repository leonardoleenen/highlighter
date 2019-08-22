import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy  from './components/dummy/index'
import './styles/tailwind.scss'
import {AppState} from './redux/store'
import {SelectionState, AddAction, RemoveAction, CleanAction} from './services/types'
import {connect} from 'react-redux'

interface AppProps {
  selection: SelectionState
  //add: typeof add
  //remove: typeof remove
  //clean: typeof clean
}




/*
const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      This is main
      <Dummy></Dummy>
    </div>
  );
}*/
class App extends React.Component {

  constructor(props:any){
    super(props)
  }

  render(){
    return(
    <div className="App">
      This is main
    <Dummy></Dummy>
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
