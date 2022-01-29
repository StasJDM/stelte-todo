<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Button from '../components/button.component.svelte';

  let itemsCount = 0;
  export { itemsCount };

  const dispatch = createEventDispatcher();

  const onClickAdd = () => {
    dispatch('add');
  };

  const onClickClearChecked = () => {
    dispatch('clearChecked');
  };

  const onCkickExport = () => {
    dispatch('export');
  };
</script>

<div class="panel-container">
  <div>Items: {itemsCount}</div>
  <div>
    <Button on:click={onClickAdd} text={'Add'} />
    <Button on:click={onClickClearChecked} text={'Clear checked'} />
    <Button on:click={onCkickExport} text={'Export'} />
  </div>
</div>

<style lang="scss">
  .panel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
    border-top: 1px solid #dadada;
    border-bottom: 2px solid #dadada;
  }
</style>
