import type { ToDoItem } from '../types';

export interface LocalStorageStructure {
  items: ToDoItem[];
}

const TODO_LIST_STORAGE_KEY = 'todo-list';
const INITIAL_TODO_LIST: ToDoItem[] = [
  { value: 'Learn svelte', checked: true },
  { value: 'Make a todo app using svelte', checked: false },
  { value: 'Make a first commit to svelte project on GitHub', checked: false },
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
  const newItem: ToDoItem = { value, checked: false };
  const actualList = getList();
  const newList: ToDoItem[] = [...actualList, newItem];
  localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items: newList }));
};

export default { getList, addItem };
