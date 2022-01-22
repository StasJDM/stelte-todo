<script>
  import ToDoItem from './todo-item.component.svelte';
  import ToDoTopPanel from './todo-top-panel.component.svelte';
  import { getList, addItem } from '../sevices/todo-local-storage.service';

  let items = getList();
  $: itemsCount = items.length;

  const onClickAddItem = () => {
    addItem('new item');
    items = getList();
  };

  const onClickClearChecked = () => {};
</script>

<main>
  <h1>To Do</h1>
  <ToDoTopPanel {itemsCount} on:add={onClickAddItem} on:clearChecked={onClickClearChecked} />
  <div>
    {#each items as item}
      <ToDoItem class="item" text={item} />
    {/each}
  </div>
</main>

<style>
  main {
    margin: auto;
    width: 640px;
    border: 1px solid #dadada;
    border-radius: 4px;
    box-shadow: 2px 2px 10px #bdbdbd;
  }

  h1 {
    text-align: center;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 56px;
    font-weight: 100;
  }
</style>
