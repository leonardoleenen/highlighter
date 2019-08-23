export const ADD: string = "ADD";
export const REMOVE: string = "REMOVE";
export const CLEAN: string = "CLEAN";

export const CHANGE_TO_RED: string = "CHANGE_TO_RED";
export const CHANGE_TO_YELLOW: string = "CHANGE_TO_YELLOW";
export const CHANGE_TO_GREEN: string = "CHANGE_TO_GREEN";

export enum Colors {
  red = "RED",
  yellow = "YELLOW",
  green = "GREEN"
}

export interface Highlighted {
  id?: string;
  color: Colors;
  text: string;
}

export const backgroundPalette = {
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  green: "bg-green-400"
};

export interface AddAction {
  type: typeof ADD;
  toAdd: Highlighted;
}

export interface RemoveAction {
  type: typeof REMOVE;
  toRemove: string;
}

export interface CleanAction {
  type: typeof CLEAN;
}

export interface SelectionState {
  pencil: string;
  highlighted: Highlighted[];
}

export interface ChangeColorAction {
  type: string;
  colorToChange: string;
}

export interface IHighLighterService {
  /**
   * Add a new element to phrases selection
   * @param color Color assigned
   * @param text Text to add
   * @returns a new generated Id.
   */
  addNewElement(color: string, text: string): string;

  /**
   * Remove a element from collection
   * @param id Element id to be removed
   */
  removeElement(id: string): void;

  /**
   * Clean all selected / collected phrases
   */
  cleanSelection(): void;

  /**
   * Return a list of Highlighted elements
   */
  getHighLighted(): Highlighted[];
}

const hashCode = (toHash: string): number => {
  var hash = 0,
    i,
    chr;
  if (toHash.length === 0) return hash;
  for (i = 0; i < toHash.length; i++) {
    chr = toHash.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

export class HighLighterService implements IHighLighterService {
  private collection: Highlighted[] = [];

  constructor(collection: Highlighted[]) {
    this.collection = collection;
  }

  addNewElement(color: string, text: string): string {
    if (!text.trim())
      return "";
    const id = hashCode(color + text).toString();

    if (this.collection.filter( h => h.id === id).length > 0) // Element Repeated
      return ""

    this.collection.push({ id, color, text } as Highlighted);
    return id;
  }

  removeElement(id: string): void {
    this.collection = this.collection.filter( h => h.id!=id )
  }

  cleanSelection(): void {
    this.collection = [];
  }

  getHighLighted(): Highlighted[] {
    return this.collection;
  }
}
