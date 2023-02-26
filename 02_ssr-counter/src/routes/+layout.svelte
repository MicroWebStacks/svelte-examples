
<main>
    <nav>
        <a href="/">home</a>
        <a href="/page2">Page 2</a>
    </nav>
    <div class="content">
        <slot></slot>
    </div>
</main>

<style>
    a{
        background-color: rgb(231, 231, 231);
        padding:10px;
        border-radius: 4px;
        margin: 2px;
        text-decoration: none;
        color: black;
        box-shadow: 1px 1px 1px 1px gray;
    }
    a:hover{
        background-color: rgb(210, 210, 210);
        box-shadow: 3px 3px 2px 1px gray;
    }

    main{
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;
        background: radial-gradient(34.14% 72.25% at 47.58% 31.75%,hsla(209,100%,95%,.52) 0%,hsla(0,0%,100%,0) 100%),linear-gradient(92.4deg,hsl(210,7%,83%) 14.67%,hsla(208,100%,97%,.48) 54.37%,hsla(207,22%,84%,.62) 92.49%),linear-gradient(0deg,hsl(204,38%,90%),hsl(204,38%,90%));
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    nav{
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: center;
    }
    .content{
        height:100vh;
    }

</style>