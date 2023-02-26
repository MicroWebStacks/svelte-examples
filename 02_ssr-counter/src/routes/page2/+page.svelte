<script>
    export let data;
</script>

<h1>Svelte Kit - SSR Counter</h1>
<h2>Page 2</h2>
<p>github project <a href="https://github.com/MicroWebStacks/svelte-examples/tree/main/02_ssr-counter" target="_blank" rel="nonreferrer">02_ssr-counter</a></p>

<p class="message">The counter value is {data.counter}</p>

<style>
    .message{
        background-color: rgb(218, 218, 218);
        border-radius: 5px;
        width: fit-content;
        padding: 10px;
        box-shadow: inset 0 0 10px #a6a6a6;
    }
</style>
