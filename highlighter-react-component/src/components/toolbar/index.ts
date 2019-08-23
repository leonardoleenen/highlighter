import React from 'react'
import { view } from './view';
import { Colors,  CHANGE_TO_GREEN, CHANGE_TO_RED, CHANGE_TO_YELLOW } from '../../services/types';
import { connect } from 'react-redux';


/** This component is a toolbar component for choice diferents colors */
class Toolbar extends React.Component{
  constructor(props: any) {
    super(props)
  }
  change = (color: string) => this.setState({ colorSelected: color })
  render = () => view((this.props as any).colorSelected, (this.props as any).change)
}

const mapStateToProps = (state: any) => {
  return {
    colorSelected: state.selection.pencil
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    change: (value: string) => {
      switch (value) {
        case Colors.red:
          dispatch({ type: CHANGE_TO_RED })
          break
        case Colors.yellow:
          dispatch({ type: CHANGE_TO_YELLOW })
          break
        case Colors.green:
          dispatch({ type: CHANGE_TO_GREEN })
          break
        default:
          break
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)