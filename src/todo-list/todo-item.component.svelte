<script>
  export let text = 'text';
</script>

<main>
  <div class="item-container">{text}</div>
</main>

<style>
  main {
    border-bottom: 1px solid #bababa;
  }

  main:last-child {
    border-bottom: none;
  }

  .item-container {
    padding: 8px 16px;
  }

  .item-container:hover {
    background: #f0f0f0;
  }
</style>
