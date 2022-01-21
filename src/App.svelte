<script>
  import ToDoList from './todo-list/ToDoList.svelte';
</script>

<main>
  <ToDoList />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 640px) {
    main {
      height: 100%;
    }
  }
</style>
