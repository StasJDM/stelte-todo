<script lang="ts">
  import ToDoList from './todo-list/todo-list.component.svelte';
  import BaseDialog from './dialogs/base-dialog.svelte';
</script>

<main>
  <ToDoList />
  <BaseDialog />
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
