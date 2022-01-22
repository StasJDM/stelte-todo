<script>
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
</script>

<div class="panel-container">
  <div>Items: {itemsCount}</div>
  <div>
    <Button on:click={onClickAdd} text={'Add'} />
    <Button on:click={onClickClearChecked} text={'Clear checked'} />
  </div>
</div>

<style>
  .panel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
    border-top: 1px solid #dadada;
    border-bottom: 2px solid #dadada;
  }
</style>
