import React from 'react'
import styled from 'styled-components'
import { Highlighted } from '../../services/types';
import Chip from '../chip/index';

const Container = styled.div`
    display: grid; 
    grid-template-rows: 70% 20% 10%;
    text-align: left;
`
const WriteZone  = styled.div `

`
const SelectionZone = styled.div`

`

const ActionZone  = styled.div `

`



export const view = (add : any, clean: any, colorSelected: string, highlighted: Highlighted[]) => {
    return (
        <Container className="bg-white rounded-lg shadow-md">
            <WriteZone 
                onMouseUp = {() => add(colorSelected, (window.getSelection() as any).toString())}
                suppressContentEditableWarning={true}
                contentEditable 
                className='p-4 border-b-2 border-gray-400 overflow-auto '>
                {text}
            </WriteZone>
            
            <SelectionZone className="overflow-x-auto">
                {highlighted.map(h => (<Chip id={h.id} color={h.color} text={h.text} key={h.id}></Chip>))}
            </SelectionZone>
            <ActionZone className = " flex justify-end ">
                <button className=" uppercase m-2 text-blue-500 font-semibold" onClick = { () => clean()}>Clear All</button>
                <button className="  uppercase m-2 text-blue-500 font-semibold mr-8 ">Save</button>
            </ActionZone>
        </Container>
    )
}


const text = `
Before Santa Klaas came into the Netherlands, that is, to Belgium and Holland, he was called by many names, in the different countries in which he lived, and where he visited. Some people say he was born in Myra, many hundred years ago before the Dutch had a dyke or a windmill, or waffles, or wooden shoes. Others tell us how, in time of famine, the good saint found the bodies of three little boys, pickled in a tub, at a market for sale, and to be eaten up. They had been salted down to keep till sold. The kind gentleman and saint, whose name was Nicholas, restored these three children to life. It is said that once he lost his temper, and struck with his fist a gentleman named Arius; but the storyteller does not believe this, for he thinks it is a fib, made up long afterward. How could a saint lose his temper so? 
Another story they tell of this same Nicholas was this. There were three lovely maidens, whose father had lost all his money. They wanted husbands very badly, but had no money to buy fine clothes to get married in. He took pity on both their future husbands and themselves. So he came to the window, and left three bags of gold, one after the other. Thus these three real girls all got real husbands, just as the novels tell us of the imaginary ones. They lived happily ever afterward, and never scolded their husbands. 

`