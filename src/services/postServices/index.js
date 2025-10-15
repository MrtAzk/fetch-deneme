const baseUrl ="https://jsonplaceholder.typicode.com/"


 export const index = async()=>{
    try {
        const res = await fetch(`${baseUrl}posts`)
        const json = await res.json()
          if (json.error){
            console.warn(json.message) 
            return []
        } 
        return json
    } catch (error) {
        console.log(error)
    }
}

export const create = async (payload)=>{
    try {
        const res = await fetch(`${baseUrl}posts`,{
            method:"post",
            body:JSON.stringify(payload)

        })
        const json = await res.json();
        return json;
    } catch (error) {
        console.log(error)
        
    }
}

export const remove = async(id)=>{
    try {
        const res = await fetch(`${baseUrl}posts/${id}`,{
            method:"delete",
            
        })
        const json = await res.json();
        return json;
    } catch (error) {
        console.log(error)
    }
}

