import type { ToDoItem } from '../types';
import { v4 as uuidv4 } from 'uuid';

const TODO_LIST_STORAGE_KEY = 'todo-list';
const INITIAL_TODO_LIST: ToDoItem[] = [
  { id: uuidv4(), value: 'Learn svelte', checked: true },
  { id: uuidv4(), value: 'Make a todo app using svelte', checked: false },
  { id: uuidv4(), value: 'Make a first commit to svelte project on GitHub', checked: false },
];

export interface LocalStorageStructure {
  items: ToDoItem[];
}

export class ToDoLocalStorageService {
  public getList(): ToDoItem[] {
    const list: LocalStorageStructure = JSON.parse(localStorage.getItem(TODO_LIST_STORAGE_KEY));

    if (list) {
      return list.items;
    }

    this._saveList(INITIAL_TODO_LIST);
    return INITIAL_TODO_LIST;
  }

  public addItem(value: string): void {
    const newItem: ToDoItem = { id: uuidv4(), value, checked: false };
    const actualList = this.getList();
    const newList: ToDoItem[] = [...actualList, newItem];

    this._saveList(newList);
  }

  public updateItem(changedItem: ToDoItem) {
    const list = this.getList();
    const updatedList = list.map((item) => (item.id === changedItem.id ? changedItem : item));

    this._saveList(updatedList);
  }

  private _saveList(items) {
    localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items }));
  }
}
