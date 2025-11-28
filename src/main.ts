import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import './smui.css'
import "svelte-material-ui/bare.css";

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
