import React from 'react' 
import styled from 'styled-components'
import { Colors } from '../../services/types';
import { ToolbarState } from '.';

const Container  = styled.div `
    height: 150px;
    width: 70px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 6px;
    
`

const Circle  = styled.div`
    margin: auto
`

const styleSelected = {filter: 'blur(2px)'}

export const view = (state: ToolbarState, change: any) => {
    return (<Container className="bg-white h-100px ml-8 rounded-full shadow-md ">
        <span/>
        <Circle
            onClick = { () => change(Colors.red)} 
            className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center " style={ state.colorSelected === Colors.red  ? styleSelected : {}}></Circle>
        <Circle
            onClick = { () => change(Colors.yellow)} 
            className="bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center " style={ state.colorSelected === Colors.yellow  ? styleSelected : {}}></Circle>
        <Circle
            onClick = { () => change(Colors.green)} 
            className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center " style={ state.colorSelected === Colors.green  ? styleSelected : {}}></Circle>
        <span/>gi
    </Container>)
}