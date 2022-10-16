<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let choices: string[]
  export let yourAnswer: string
  export let judged: boolean

  const dispatch = createEventDispatcher<{ select: { choice: string } }>()

  const select = (choice: string) => {
    if (!judged) {
      dispatch("select", { choice })
    }
  }

  type ItemStyleType = "normal" | "disabled" | "selected"

  const getItemStyle = (
    choices: string,
    yourAnswer: string,
    judged: boolean
  ): ItemStyleType => {
    if (judged) {
      if (choices === yourAnswer) {
        return "selected"
      }
      return "disabled"
    }
    return "normal"
  }
</script>

<ul class="list">
  {#each choices as choice}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
      class="item {getItemStyle(choice, yourAnswer, judged)}"
      on:click={() => select(choice)}
    >
      {choice}
    </li>
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
    &.selected {
      background-color: #9fc;
    }
  }
</style>
