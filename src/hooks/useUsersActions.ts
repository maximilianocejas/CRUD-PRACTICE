import { addNewUser, deleteUsersById, User, UserId } from "../store/users/slice"
import { useAppDispatch } from "./store"

export const useUsersActions = ()=>{
    const dispatch = useAppDispatch()
    const removeUser = (id: UserId)=>{
      dispatch(deleteUsersById(id))
    }
    const addUser = ({name,email,github}:User)=>{
      dispatch(addNewUser({name,email,github}))
    }
    return { removeUser, addUser };
}


