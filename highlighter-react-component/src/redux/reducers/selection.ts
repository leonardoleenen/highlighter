import {
  Highlighted,
  SelectionState,
  ADD,
  REMOVE,
  CLEAN,
  CHANGE_TO_GREEN,
  CHANGE_TO_RED,
  CHANGE_TO_YELLOW,
  AddAction, 
  RemoveAction,
  CleanAction,
  Colors,
  ChangeColorAction
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

export const selection = (state: SelectionState = {pencil: Colors.red,  highlighted: []}, action: AddAction | RemoveAction | CleanAction | ChangeColorAction) : SelectionState => {
  let highlighted = [] 
  
  switch (action.type) {
    case ADD: 
      highlighted = Object.assign([] as Highlighted[],state.highlighted)
      const  addElement  = action as AddAction
      addElement.toAdd.id = hashCode(addElement.toAdd.color + addElement.toAdd.text).toString()
      highlighted.push(addElement.toAdd)
      return {...state,highlighted}
    case REMOVE: 
      highlighted = Object.assign([] as Highlighted[],state.highlighted)
      const removeElement = action as RemoveAction
      return {...state,highlighted: highlighted.filter( h => h.id! ===removeElement.toRemove )}
    case CLEAN: 
      return {...state,highlighted: []}
    case CHANGE_TO_RED:
        return {...state,pencil: Colors.red}
      case CHANGE_TO_YELLOW:
        return {...state,pencil: Colors.yellow}
      case CHANGE_TO_GREEN:
        return {...state,pencil: Colors.green}
    default: 
      return state
  }
} 
