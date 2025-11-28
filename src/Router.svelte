<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import TestRoute from "./routes/Home.svelte"; 
</script>

<Router url="/">
  <Route path="/" component={TestRoute} /> 
  
  </Router>