
export const ssr = false
export const csr = true

export function load(){
    const evtSource = new EventSource("/api/stream")
        
    evtSource.onmessage = (event) => {
        const span = document.querySelector('.counter')
        const data = JSON.parse(event.data)
        console.log(data.counter)
        span.textContent = data.counter
    
    }
    evtSource.onerror = (err) => {
          console.error("EventSource failed:", err);
          evtSource.close();
    };	
}
