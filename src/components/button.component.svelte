<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  let text: string;
  export { text };

  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch('click');
  };
</script>

<button on:click={onClick}>{text}</button>

<style>
  button {
    margin: 0;
    background: #ff3e00;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    border: none;
  }

  button:hover {
    background: #ff5d27;
  }

  button:active {
    background: #c03000;
  }
</style>
