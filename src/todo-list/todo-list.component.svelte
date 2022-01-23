<script lang="ts">
  import ToDoItem from './todo-item.component.svelte';
  import ToDoTopPanel from './todo-top-panel.component.svelte';
  import ToDoLocalStorageService from '../sevices/todo-local-storage.service';
  import TodoInput from './todo-input.component.svelte';

  let items = ToDoLocalStorageService.getList();
  $: itemsCount = items.length;

  let showInput = false;

  const onClickButtonAdd = () => {
    showInput = true;
  };

  const onClickButtonClearChecked = () => {};

  const onAddItem = (event: CustomEvent) => {
    ToDoLocalStorageService.addItem(event.detail);
    items = ToDoLocalStorageService.getList();
    showInput = false;
  };

  const onChangeItem = (event: CustomEvent) => {
    ToDoLocalStorageService.updateItem(event.detail);
    items = ToDoLocalStorageService.getList();
  };
</script>

<main>
  <h1>To Do</h1>
  <ToDoTopPanel {itemsCount} on:add={onClickButtonAdd} on:clearChecked={onClickButtonClearChecked} />
  <div>
    {#each items as item}
      <ToDoItem {item} on:change={onChangeItem} />
    {/each}

    {#if showInput}
      <TodoInput on:done={onAddItem} />
    {/if}
  </div>
</main>

<style lang="scss">
  main {
    margin: auto;
    width: 640px;
    border: 1px solid #dadada;
    border-radius: 4px;
    box-shadow: 2px 2px 10px #bdbdbd;

    h1 {
      text-align: center;
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 56px;
      font-weight: 100;
    }
  }
</style>
