import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fe02794e-87fe-4fe8-ada5-f6fa7d443c83'
    }
})

export const usersApi = {
     getUsers (currentPage: number, pageSize: number)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
   postFollow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    deleteFollow (id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile (userId: number | string) {
         console.log('Obsolete method. Please profileApi object')
       return  profileApi.getProfile(userId)    // берет апишку с profileApi
    }
}

export const profileApi = {
    getProfile (userId: number | string) {
        return  instance.get('profile/' + userId)
    },
    getStatus (userId: number | string) {
        return  instance.get('profile/status/' + userId)
    },
    updateStatus (status: string) {
        return  instance.put('profile/status', {status: status})
    }
}


export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}
