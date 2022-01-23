<script lang="ts">
  export let text = 'text';
</script>

<main>
  <div class="item-container">{text}</div>
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
