<script lang="ts">
  import Button from "./Button.svelte"
  import Choices from "./Choices.svelte"
  import Result from "./Result.svelte"

  const questionText =
    "少ないコード量で書ける、仮想DOMを使わないなどの特徴をもつ、「サイバネティクスで強化されたWEBアプリ」というキャッチコピーで知られる、 Rich Harris 氏によって作られたフロントエンドのフレームワークは何でしょう？"

  const choices = ["React", "SolidJS", "Svelte"]

  const answer = "Svelte"

  const explanationText =
    "Svelte は仮想DOMによる差分検出のようなテクニックを使用する代わりに、 アプリケーションの状態が変化したときにDOMを外科的に更新するコードをコンパイル時に生成することで、バンドルサイズを小さくし、パフォーマンスを向上させることに成功しました。"

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
    {#if isCorrect}
      <p class="explanation">{explanationText}</p>
    {/if}
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
