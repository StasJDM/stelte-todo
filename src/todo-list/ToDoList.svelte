<script>
  import ToDoItem from './ToDoItem.svelte';
  let items = ['item 1', 'item 2', 'item 3', 'item 4'];
</script>

<main>
  <h1>To Do</h1>
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
