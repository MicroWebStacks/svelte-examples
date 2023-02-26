<script>
    let count = 0

    function increment(){
        count += 1
    }
    function decrement(){
        count -= 1
    }
</script>

<div>
    <h1>My Card</h1>
    <p>counter = {count}</p>
    <button on:click={increment}>+</button>
    <button on:click={decrement}>-</button>
</div>

<style>
    h1{
        font-size: medium;
    }
   div{
    background-color: rgb(178, 172, 166);
    padding : 5px;
    margin: 5px;
    border-radius: 10px;;
   } 
</style>