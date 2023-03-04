import { marked } from 'marked';
import {promises as fs} from 'node:fs';
import { config } from '../../../../config';
import {join} from 'node:path'

export async function load({params}){
try {
    const slug = params['slug'];
    console.log(`docs> requested '${slug}'`)
    const page_path = join(config.rootdir,"content/",`${slug}.md`)
    
    let found = true
    try {
      await fs.access(page_path)
    } catch {
        console.warn(`docs> ${slug} does not exist`)
        found = false
    }
    if(found){
        const content = await fs.readFile(page_path, 'utf-8');
        return{
            post: marked.parse(content)
        }
    }else{
        return{
            post: marked.parse("content not found")
        }
    }
    } catch (e) {
        console.log(e);
    }
}
