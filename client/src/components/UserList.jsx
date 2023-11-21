import { useEffect, useRef, useState } from "react"
import User from "./User"
import {create, deleteOne, getAll, getOne} from "../api/usersApi"
import UserDetails from "./UserDetails"
import Edit from "./Edit"
import Spinner from "./spinner"
import DeleteModal from "./DeleteModal"
import Create from "./Create"


export default function UserList({addBtnHandler}){
    const [users, setUsers] = useState([])
    const [userDetail, setUserDetails] = useState({})
    const [selectedUser, setSetSelectedUser] = useState(null)
    const [toggleDetails, setToggleDetails] = useState(false)
    const [toggEdit , setToggleEdit] = useState(false)
    const[toggleDelete, setToggleDelete] = useState(false)
    const [toggleAddUser, setToggleAddUser] = useState(false)
    const [spinnerToggle, setSpinnerToggle] = useState(true)

    useEffect(()=>{
        console.log('mount');
        getAll()
        .then(result => setUsers(result))
        .catch( error => console.log(`GetAll-${error}`))
        setSpinnerToggle(false)

}, [])

const userInfoclickHandler = async (id) =>{
    setToggleDetails(true)
    const data = await getOne(id)
    setUserDetails(data)
}





function deleteUserClickHandler(userId){
    setToggleDelete(true)
    setSetSelectedUser(userId)
}

async function deleteUserHandler(){
    console.log(`delete selected user ${selectedUser}`);
    // console.log(`${userId}-Delete User Id `);

    deleteOne(selectedUser)
    .catch(error => console.log(`${error}-error`))

    setUsers(users.filter( u => u._id !== selectedUser)) 
    setToggleDelete(false)

}

function onEditSaveHandler(event) {
    event.preventDefault()
    console.log(event.target);
}

async function onCreate(fomData) {
    
try {
    const newUser = await create(fomData)
    setUsers(state => ([...state,newUser]))
    setToggleAddUser(false)
} catch (error) {
    console.log(error);
}


}
function addBtnHandler(){
console.log('Add-Btn');

}


    return (<>
    {toggEdit && < Edit onSave={onEditSaveHandler} onCloseEdit={()=>setToggleEdit(false)} /> }
    {toggleDelete &&   <DeleteModal onDelete={deleteUserHandler} onClose={() => setToggleDelete(false)}/>}
    {toggleAddUser && <Create onCreate={onCreate} onCloseCreate={()=> setToggleAddUser(false)} />}
    {spinnerToggle && <Spinner />}

        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>
                        First name
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th>
                        Last name
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th>
                        Email
                        <svg
                            className="icon"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th>
                        Phone
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th>
                        Created
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Table row component */}
                {users.map(user => (
                <User key={user._id} 
                onEdit={()=> setToggleEdit(true)}
                showinfoModal={userInfoclickHandler}
                 showDeleteModal={deleteUserClickHandler} 
                 showCreateUserModal={()=>setToggleAddUser(true)}
                  {...user} />))}

            </tbody>
        </table>

        { toggleDetails && 
        < UserDetails  {...userDetail}
         hideInfo={()=> setToggleDetails(false)}/>}

        <button onClick={()=>setToggleAddUser(true)}  className="btn-add btn">Add new user</button>
    </>)
}

