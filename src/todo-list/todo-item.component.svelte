<script lang="ts">
  import type { ToDoItem } from '../types';

  export let item: ToDoItem;
</script>

<main>
  <div class="item-container">{item.value}</div>
</main>

<style lang="scss">
  main {
    border-bottom: 1px solid #bababa;

    &:last-child {
      border-bottom: none;
    }

    .item-container {
      padding: 8px 16px;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
</style>
