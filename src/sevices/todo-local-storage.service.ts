const TODO_LIST_STORAGE_KEY = 'todo-list';
const INITIAL_TODO_LIST = ['item 1', 'item 2', 'item 3', 'item 4'];

const getList = () => {
  const list = JSON.parse(localStorage.getItem(TODO_LIST_STORAGE_KEY));

  if (list) {
    return list.items;
  }
  localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items: INITIAL_TODO_LIST }));
  return INITIAL_TODO_LIST;
};

const addItem = (item) => {
  const actualList = getList();
  const newList = [...actualList, item];
  localStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify({ items: newList }));
};

export default { getList, addItem };
