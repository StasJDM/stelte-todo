<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { ToDoItem } from '../types';

  export let item: ToDoItem;

  const dispatch = createEventDispatcher();

  const onChangeCheckboxState = () => {
    dispatch('change', item);
  };
</script>

<div class:checked={item.checked} class="item-container">
  <input type="checkbox" bind:checked={item.checked} on:change={onChangeCheckboxState} />
  {item.value}
</div>

<style lang="scss">
  .item-container {
    padding: 8px 16px;
    border-bottom: 1px solid #bababa;

    input {
      margin-right: 8px;
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: #f0f0f0;
    }

    &.checked {
      text-decoration: line-through;
      color: #888888;
    }
  }
</style>
