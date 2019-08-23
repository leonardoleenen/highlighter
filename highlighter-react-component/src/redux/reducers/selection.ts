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
  ChangeColorAction,
  HighLighterService
} from '../../services/types'



export const selection = (state: SelectionState = {pencil: Colors.red,  highlighted: []}, action: AddAction | RemoveAction | CleanAction | ChangeColorAction) : SelectionState => {
  let highlighted = [] 
  const service = new HighLighterService(Object.assign([] as Highlighted[],state.highlighted))
  
  switch (action.type) {
    case ADD: 
      const  addElement  = action as AddAction
      const id = service.addNewElement(addElement.toAdd.color,addElement.toAdd.text)
      if (!id) //Empty Element
        return state
      return {...state,highlighted: service.getHighLighted()}
    case REMOVE: 
      const removeElement = action as RemoveAction
      service.removeElement(removeElement.toRemove)
      return {...state,highlighted: service.getHighLighted()}
    case CLEAN: 
      service.cleanSelection()
      return {...state,highlighted: service.getHighLighted()}
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
