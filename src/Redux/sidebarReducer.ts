
export type FriendType = {
    name: string
    id: number
    img: string
}
export type SidebarType = {
    friends: Array<FriendType>
}

let initialState: SidebarType = {
        friends: [
            {name: 'Dima', id: 1, img: 'https://image.freepik.com/free-vector/cute-blue-wolf-avatar_79416-81.jpg'},
            {name: 'Dora', id: 2, img: 'https://image.freepik.com/free-vector/cute-blue-wolf-avatar_79416-81.jpg'},
            {name: 'Oleg', id: 3, img: 'https://image.freepik.com/free-vector/cute-blue-wolf-avatar_79416-81.jpg'},
        ]
}

const sidebarReducer = (state = initialState, action: any) => {

    return state
}

export default sidebarReducer