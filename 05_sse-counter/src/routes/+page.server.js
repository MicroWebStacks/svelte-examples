import { get_count } from './events';

export function load(){

    let counter = get_count()
    console.log(`current counter =${counter}`)
    
    return{
        counter:counter
    }
}
