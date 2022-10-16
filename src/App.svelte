<script lang="ts">
  import Button from "./Button.svelte"
  import Choices from "./Choices.svelte"
  import Result from "./Result.svelte"

  const questionText =
    "素のJavaScriptに匹敵する高いパフォーマンス、JSXで書ける、きめ細かいリアクティビティ、仮想DOMを使用しないなどの特徴をもつ、 Ryan Carniato 氏が開発したフロントエンドのフレームワークは何でしょう？"

  const choices = ["React", "SolidJS", "Svelte"]

  const answer = "SolidJS"

  const explanationText =
    "SolidJS は、 React の思想を取り入れつつも、仮想DOMを使用しない独自の実装をすることで、素のJavaScript並の高いパフォーマンスを実現しました。"

  let yourAnswer = ""
  let judged = false
  let isCorrect = false

  const judge = (choice: string) => {
    yourAnswer = choice
    judged = true
    isCorrect = choice === answer
  }

  const reset = () => {
    yourAnswer = ""
    judged = false
  }
</script>

<main class="container">
  <h1 class="title">Svelte Quiz</h1>
  <h2 class="heading">問題</h2>
  <p class="question">{questionText}</p>
  <Choices
    {choices}
    {yourAnswer}
    {judged}
    on:select={(event) => judge(event.detail.choice)}
  />
  {#if judged}
    <Result {isCorrect} />
    <p class="explanation">{explanationText}</p>
    <Button on:click={reset}>リトライ</Button>
  {/if}
</main>

<style lang="scss">
  .title {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  .container {
    width: min(600px, 85%);
    margin: 16px auto;
    background-color: #fff;
    border-radius: 4px;
    padding: 16px;
    position: relative;
  }
  .heading {
    margin-bottom: 18px;
    font-size: 18px;
    font-weight: bold;
  }
  .explanation {
    margin-bottom: 16px;
    font-size: 16px;
  }
</style>
