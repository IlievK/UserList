 const baseUrl = 'http://localhost:3030/jsonstore/users'
 
 export async function getAll(){
    const respons = await fetch(baseUrl)
    const result = await respons.json()

    return  Object.values(result)
    
     
}

export const getOne = async (userId)=>{
    const response = await fetch(`${baseUrl}/${userId}`)
    return  await response.json()

}

export const create = async (data) =>{
    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email:data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date(),
        updatedAt: new Date(),
        address:{
            streetNumber:data.streetNumber,
            street: data.street,
            city:data.city,
            country:data.country
        }
    }
    const response = await fetch(baseUrl, {
        method : "post" ,
        headers: {
            'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    })
    return await response.json()
    
}


export const deleteOne = async (userId) =>{

    const response = await fetch(`${baseUrl}/${userId}`, {
        method : "delete" 
    })

}

// export default {
//     getAll
// }

