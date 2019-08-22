import {
  Highlighted,
  SelectionState,
  ADD,
  REMOVE,
  CLEAN,
  AddAction, 
  RemoveAction,
  CleanAction
} from '../../services/types'


const hashCode = (toHash: string) : number =>  {
  var hash = 0, i, chr;
  if (toHash.length === 0) return hash;
  for (i = 0; i < toHash.length; i++) {
    chr   = toHash.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const selection = (state: SelectionState = {highlighted: []}, action: AddAction | RemoveAction | CleanAction) : SelectionState => {
  let highlighted = [] 
  
  switch (action.type) {
    case ADD: 
      highlighted = Object.assign([] as Highlighted[],state)
      const  addElement  = action as AddAction
      addElement.toAdd.id = hashCode(addElement.toAdd.color + addElement.toAdd.text).toString()
      highlighted.push(addElement.toAdd)
      return {...state,highlighted}
    case REMOVE: 
      highlighted = Object.assign([] as Highlighted[],state)
      const removeElement = action as RemoveAction
      return {...state,highlighted: highlighted.filter( h => h.id! ===removeElement.toRemove )}
    case CLEAN: 
      return {...state,highlighted: []}
    default: 
      return state
  }
} 

