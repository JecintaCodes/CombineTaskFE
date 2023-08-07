import axios from "axios"



const url:string =""

export const SignUpUser = async(data: any)=>{
    try {
        return await axios.post(`${url}/sign-up`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const SignInUser = async(data: any)=>{
    try {
        return await axios.post(`${url}/sign-in`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const ViewAll = async(data: any)=>{
    try {
        return await axios.get(`${url}/view-all`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const ViewOne = async(data: any, userID: any)=>{
    try {
        return await axios.get(`${url}/${userID}/view-one`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser = async(data: any, userID: any)=>{
    try {
        return await axios.delete(`${url}/${userID}/delete`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const UpdateUser = async(data: any, userID: any)=>{
    try {
        return await axios.patch(`${url}/${userID}/update`).then((res: any)=>{
        return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
