import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
export type UserId = string;
export interface User {
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User{
    id: UserId;
}

const DEFAULT_STATE : UserWithId[] = [
	{
		id: "1",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gmail.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Haakon Dahlberg",
		email: "haakon@gmail.com",
		github: "midudev",
	},
	{
		id: "4",
		name: "Maximiliano cejas",
		email: "haakon@gmail.com",
		github: "maximilianocejas",
	},
]
	
const initialState = (()=>{
	const persistedState = localStorage.getItem("__redux__state")
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
		addNewUser : (state,action: PayloadAction<User>)=>{
			const id = crypto.randomUUID()
			state.push({id,...action.payload})

		},
		deleteUsersById: (state,action:PayloadAction<UserId>)=>{
			const id = action.payload
			return state.filter((user)=> user.id !== id)
		}
	}
})


export default usersSlice.reducer
export const {deleteUsersById , addNewUser} = usersSlice.actions
