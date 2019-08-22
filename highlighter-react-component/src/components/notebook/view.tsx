import React from 'react'
import styled from 'styled-components'
import Pad from '../pad';
import Toolbar from '../toolbar/index'

const Container = styled.div ` 
    height: 80vh;
    display: grid;
    grid-template-columns: 90% 10%;
`

export const view = () => {
    return (<Container className="m-48">
        <Pad></Pad>
        <Toolbar></Toolbar>
        </Container>)
}