<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value: string = '';

  const dispatch = createEventDispatcher();

  const onClickDone = () => {
    dispatch('done', value);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch('done', value);
    }
  };
</script>

<!-- svelte-ignore a11y-autofocus -->
<div class="input-container">
  <input bind:value on:keydown={onKeyDown} autofocus />

  <div on:click={onClickDone} class="icon-container">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
      <path d="M0 0h24v24H0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  </div>
</div>

<style lang="scss">
  .input-container {
    position: relative;

    input {
      margin: 0;
      width: 100%;
      height: 35px;
      padding: 0 16px;
      caret-color: #ff3e00;
      outline: none;
      border: none;
    }

    .icon-container {
      position: absolute;
      display: flex;
      align-items: center;
      height: 100%;
      right: 8px;
      top: 0;

      &:hover {
        svg {
          fill: #ff3e00;
        }
      }
    }
  }
</style>
