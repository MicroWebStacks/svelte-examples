import { marked } from 'marked';

export function load({params}){
    const post = "# Hello world\n\n this is a simple markdown embedded as const in `+page.server.js`.\n\n generaged with marked.parse()"
    return{
        post: marked.parse(post)
    }
}
