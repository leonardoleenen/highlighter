import React from 'react' 
import { view } from './view'

/**
 * This component is the main container. Is like an isolated enveloped or box that only contains children componts 
 */
class NoteBook extends React.Component { 
    constructor(props:any){
        super(props)
    }

    render =() => view()
}

export default NoteBook