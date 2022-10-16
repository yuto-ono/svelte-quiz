<script lang="ts">
  export let isCorrect: boolean
</script>

<p class="result">
  <i class="icon {isCorrect ? 'correct' : 'incorrect'}" />
  {isCorrect ? "正解です！" : "不正解です…"}
</p>

<style lang="scss">
  .result {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1;
  }
  .icon {
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    margin-right: 10px;
    &.correct {
      border-radius: 50%;
      border: 4px solid #0c6;
    }
    &.incorrect {
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: calc(50% - 2px);
        left: -20%;
        width: 140%;
        height: 4px;
        background-color: #c00;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
