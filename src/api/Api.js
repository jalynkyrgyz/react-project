// import React from 'react'
import axios from 'axios'
// import { follow } from '../redux/usersReducer'


const instance = axios.create({
  withCredentials: true,
  
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'bb036d5e-a243-46aa-8211-4c2ddaef21f6'
}
})

export const usersAPI = {
  getUsers (currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)   
  },
  unfollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)   
  }
}

// export const followUnfollowAPI = {
//   followUser (id) {
//     return instance.delete(`follow/${id}`)
//     .then(response => {
//       return response.data
//     })
//   },

//   unfollowUser (id) {
//     return instance.post(`follow/${id}`, {})
//     .then(response => {
//       return response.data
//     })
//   }
// }


