import { get_count, increment } from "../../lib/shared";

export const prerender = false
export const ssr = true;
export const csr = false;

export function load({params}){
    increment()
    const current_count = get_count()
    console.log(`hello from page2 load() counter = ${current_count}`)
    
    return{
        counter: current_count
    }
}
