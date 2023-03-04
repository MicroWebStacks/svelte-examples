<script>
    export let data;
</script>

<h1>Svelte Kit - cookie counter - Home Page</h1>
<p>github project <a href="https://github.com/MicroWebStacks/svelte-examples/tree/main/03_server-cookie-counter" target="_blank" rel="nonreferrer">03_server-cookie-counter</a></p>

<p class="message">
The counter value is <span class="counter">{data.counter}</span>
</p>

<style>
    .message{
        background-color: rgb(218, 218, 218);
        border-radius: 5px;
        width: fit-content;
        padding: 10px;
        box-shadow: inset 0 0 10px #a6a6a6;
    }
</style>
