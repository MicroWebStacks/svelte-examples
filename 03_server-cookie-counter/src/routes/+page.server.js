
export async function load({ cookies }){

    let counter = 0
    let cookie = cookies.get('counter');
    if(cookie != undefined){
        if(!isNaN(cookie)){
            counter = parseInt(cookie) + 1
            console.log(`hello from home load() - cookie exist - counter = ${cookie}`)
        }else{
            console.log(`hello from home load() - cookie ${cookie} NaN discarded starting from 0`)
        }
    }else{
        console.log(`hello from home load() - cookie does not exist starting from 0`)
    }

    cookies.set('counter',counter)
    
    return{
        counter: counter
    }
}
