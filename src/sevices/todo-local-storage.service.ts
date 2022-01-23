import type { ToDoItem } from '../types';
import { v4 as uuidv4 } from 'uuid';

export interface LocalStorageStructure {
  items: ToDoItem[];
}

const TODO_LIST_STORAGE_KEY = 'todo-list';
const INITIAL_TODO_LIST: ToDoItem[] = [
  { id: uuidv4(), value: 'Learn svelte', checked: true },
  { id: uuidv4(), value: 'Make a todo app using svelte', checked: false },
  { id: uuidv4(), value: 'Make a first commit to svelte project on GitHub', checked: false },
];

const getList = (): ToDoItem[] => {
  const list: LocalStorageStructure = JSON.parse(localStorage.getItem(TODO_LIST_STORAGE_KEY));

  if (list) {
    return list.items;
  }
  localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items: INITIAL_TODO_LIST }));
  return INITIAL_TODO_LIST;
};

const addItem = (value: string): void => {
  const newItem: ToDoItem = { id: uuidv4(), value, checked: false };
  const actualList = getList();
  const newList: ToDoItem[] = [...actualList, newItem];
  localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items: newList }));
};

const updateItem = (changedItem: ToDoItem) => {
  const list = getList();
  const updatedList = list.map((item) => (item.id === changedItem.id ? changedItem : item));
  localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items: updatedList }));
};

export default { getList, addItem, updateItem };
