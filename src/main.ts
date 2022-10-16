import "./app.scss"
import App from "./App.svelte"

type Constructor = (option: { target?: HTMLElement }) => void

const app = new (App as unknown as Constructor)({
  target: document.getElementById("app"),
})

export default app
