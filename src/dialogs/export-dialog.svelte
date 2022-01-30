<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "../components/button.component.svelte";
  import { ExportTypes } from "../enums";

  const dispatch = createEventDispatcher();

  const handleClickPDFButton = () => {
    dispatch("close", ExportTypes.PDF);
  };

  const handleClickJSONButton = () => {
    dispatch("close", ExportTypes.JSON);
  };

  const handleClickPNGButton = () => {
    dispatch("close", ExportTypes.PNG);
  };
</script>

<div class="export-dialog-container" on:click={handleClickPDFButton}>
  <h2>Select the type of exported file</h2>

  <div class="buttons-container">
    <Button text={"PDF"} on:click={handleClickPDFButton} />
    <Button text={"JSON"} on:click={handleClickJSONButton} />
    <Button text={"PNG"} on:click={handleClickPNGButton} />
  </div>
</div>

<style lang="scss">
  .export-dialog-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    height: 100%;

    h2 {
      margin: auto;
    }

    .buttons-container {
      margin: 16px 0;
    }
  }
</style>
