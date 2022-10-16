<button on:click class="btn"><slot /></button>

<style lang="scss">
  .btn {
    width: 100%;
    background: #3498db;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    box-shadow: 0 4px 0 #2880b9;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  }
</style>
