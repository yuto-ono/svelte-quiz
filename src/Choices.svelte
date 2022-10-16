<script lang="ts">
  export let choices: string[]
</script>

<ul class="list">
  {#each choices as choice}
    <li class="item normal">{choice}</li>
  {/each}
</ul>

<style lang="scss">
  .list {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }
  .item {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    &.normal {
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
      }
    }
    &.disabled {
      background-color: #eee;
      color: #666;
    }
    &.selectedItemStyle {
      background-color: #9fc;
    }
  }
</style>
