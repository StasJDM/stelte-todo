<script lang="ts">
  import ToDoItem from './todo-item.component.svelte';
  import ToDoTopPanel from './todo-top-panel.component.svelte';
  import TodoInput from './todo-input.component.svelte';
  import { ToDoLocalStorageService } from '../sevices/todo-local-storage.service';
  import { DialogService } from '../sevices/dialog.service';
  import ExportDialog from '../dialogs/export-dialog.svelte';

  const toDoLocalStorageService = new ToDoLocalStorageService();
  const dialogService = DialogService.getInstance();

  let items = toDoLocalStorageService.getList();
  $: itemsCount = items.length;

  let showInput = false;

  const onClickButtonAdd = () => {
    showInput = true;
  };

  const onClickButtonClearChecked = () => {
    toDoLocalStorageService.clearCheckedItems();
    items = toDoLocalStorageService.getList();
  };

  const onClickButtonExport = () => {
    dialogService.showDialog(ExportDialog, (event) => {
      console.log('On export: ', event);
    });
  };

  const onAddItem = (event: CustomEvent) => {
    toDoLocalStorageService.addItem(event.detail);
    items = toDoLocalStorageService.getList();

    showInput = false;
  };

  const onChangeItem = (event: CustomEvent) => {
    toDoLocalStorageService.updateItem(event.detail);
    items = toDoLocalStorageService.getList();
  };
</script>

<div class="todo-list">
  <h1>To Do</h1>
  <ToDoTopPanel
    {itemsCount}
    on:add={onClickButtonAdd}
    on:clearChecked={onClickButtonClearChecked}
    on:export={onClickButtonExport}
  />
  <div>
    {#each items as item}
      <ToDoItem {item} on:change={onChangeItem} />
    {/each}

    {#if showInput}
      <TodoInput on:done={onAddItem} />
    {/if}
  </div>
</div>

<style lang="scss">
  .todo-list {
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
