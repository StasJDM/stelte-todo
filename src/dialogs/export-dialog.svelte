<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleClickButton = () => {
    dispatch('close', 'Export dialog');
  };
</script>

<div on:click={handleClickButton}>Export dialog</div>
