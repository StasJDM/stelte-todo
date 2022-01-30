<script lang="ts">
  import { DialogService } from "../sevices/dialog.service";
  import { isActiveDialog } from "../store";

  const dialogService = DialogService.getInstance();

  let showDialog = false;

  isActiveDialog.subscribe((v) => (showDialog = v));

  const handleClickBackground = (event): void => {
    isActiveDialog.update((v) => false);
    dialogService.closeDialog({ ...event, detail: "none-events" });
  };

  const handleCloseDialog = (event: CustomEvent): void => {
    dialogService.closeDialog(event);
  };
</script>

{#if showDialog}
  <div class="modal-background" on:click={handleClickBackground} />
  <div class="modal-container">
    <svelte:component
      this={dialogService.component}
      on:close={handleCloseDialog}
    />
  </div>
{/if}

<style>
  .modal-background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .modal-container {
    width: 480px;
    height: fit-content;
    z-index: 2;
    position: fixed;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    border: 1px solid #dadada;
    border-radius: 4px;
    box-shadow: 2px 2px 10px #bdbdbd;
  }
</style>
