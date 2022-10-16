import "./app.scss"
import App from "./App.svelte"

const target = document.getElementById("app")

if (target != null) {
  new App({ target })
}
