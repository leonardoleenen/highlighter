export const ADD: string = 'ADD'
export const REMOVE: string = 'REMOVE'
export const CLEAN: string = 'CLEAN'

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
    highlighted: Highlighted[]
}
