
export const prerender = true
export const ssr = true;
export const csr = false;

export function load({params}){
    console.log("hello from prerender load()")
}
