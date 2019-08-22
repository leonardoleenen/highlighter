import React from 'react'
import { view } from './view';
import { Colors } from '../../services/types';


export interface ToolbarState {
    colorSelected: string 
}

class Toolbar extends React.Component {

    state: ToolbarState = { 
        colorSelected : Colors.red

    }
    constructor(props:any){
        super(props)
    }

    change = (color: string) => this.setState({colorSelected: color})

    render = () => view(this.state, this.change)
}

export default Toolbar