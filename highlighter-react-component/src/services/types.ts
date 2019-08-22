export const ADD: string = 'ADD'
export const REMOVE: string = 'REMOVE'
export const CLEAN: string = 'CLEAN'

export const CHANGE_TO_RED : string = 'CHANGE_TO_RED'
export const CHANGE_TO_YELLOW : string = 'CHANGE_TO_YELLOW'
export const CHANGE_TO_GREEN : string = 'CHANGE_TO_GREEN'

export enum Colors {
    red = 'RED',
    yellow = 'YELLOW',
    green = 'GREEN'
}

export interface Highlighted {
    id?: string,
    color: Colors,
    text: string    
}

export const backgroundPalette = {
    'red': 'bg-red-500',
    'yellow': 'bg-yellow-400',
    'green': 'bg-green-400'
}

export interface AddAction {
    type: typeof ADD,
    toAdd: Highlighted
}

export interface RemoveAction {
    type: typeof REMOVE,
    toRemove: string 
}

export interface CleanAction {
    type: typeof CLEAN
}

export interface SelectionState { 
    pencil: string
    highlighted: Highlighted[]
}

export interface ChangeColorAction {
    type: string 
    colorToChange: string 
}

