import React from 'react'
import { view } from './view'
import {connect } from 'react-redux'
import { ADD, AddAction, Highlighted } from '../../services/types';

class Pad extends React.Component {

    constructor(props:any){
        super(props)
    }

    render = () => view((this.props as any).add, (this.props as any).colorSelected)
}

const mapStateToProps = (state:any) => {
    return {
        colorSelected: state.selection.pencil
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (color: string, text: string) => dispatch({type: ADD, toAdd:{color,text} as Highlighted} as AddAction) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pad)