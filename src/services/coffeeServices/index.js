const baseUrl = "https://api.sampleapis.com/coffee/"


export const getHotCoffee = async () => {
    try {
        const res = await fetch(`${baseUrl}hot`)
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

export const getColdCoffee = async () => {

    try {
        const res = await fetch(`${baseUrl}iced`)
        const json = await res.json()
        console.log(json)
        if (json.error){
            alert(json.message) 
            return []
        } 
        return json
    } catch (error) {
        console.log(error)
    }

}