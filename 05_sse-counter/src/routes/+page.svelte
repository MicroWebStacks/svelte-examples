<script>
    export let data;
</script>

<h1>SvelteKit - Server Sent Events counter</h1>

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
