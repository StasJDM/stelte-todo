<script>
  import ToDoItem from './ToDoItem.svelte';
  let items = ['item 1', 'item 2', 'item 3', 'item 4'];
</script>

<main>
  {#each items as item}
    <ToDoItem text={item} />
  {/each}
</main>
