import React from 'react' 
import {connect} from 'react-redux'
import {view} from './view'

class Chip extends React.Component {
    constructor(props:any){
        super(props)
    }
    render = () => view()
}


const mapStateToProps = (state:any) => {
    return {

    }
} 

const mapDispatchToProps = (dispatch: any) => { 
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chip)