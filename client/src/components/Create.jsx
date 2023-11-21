import { useState } from "react"
import { create } from "../api/usersApi"

export default function Create({ 
    onCloseCreate,
    onCreate
     }) {
    const formInitiaState = {
        firstName: "",
        lastName: "",
        streetNumber:"",
        email:"",
        phoneNumber: "",
        street: "",
        imageUrl: "",
        city:"",
        country:""


    }
    const createHandler = (e)=>{
        e.preventDefault()
        onCreate(createFormValues)
    //    create(createFormValues)
    //    .then(respones => console.log(respones))
    }

    const [createFormValues, setCreateFormValues] = useState(formInitiaState)

    const formValuesHandler = (e) => {
        console.log(e.target.value);
        let value = null

        switch (e.target.type) {
            case "Number": value = Number(e.target.value)
                break;
            default:
                value = e.target.value
                break;
        }
        setCreateFormValues(state => ({
            ...state,
            [e.target.name]:  value
        }))

        console.log(createFormValues?.firstName);

    }

    return (
        <div className="overlay">
            <div onClick={onCloseCreate} className="backdrop"></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add User</h2>
                        <button onClick={onCloseCreate} className="btn close">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={createHandler}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input onChange={formValuesHandler} id="firstName" name="firstName" type="text" defaultValue={createFormValues?.firstName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input onChange={formValuesHandler} id="lastName" name="lastName" type="text" defaultValue={createFormValues?.lastName}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input onChange={formValuesHandler} id="email" name="email" type="text" defaultValue={createFormValues?.email}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input onChange={formValuesHandler} id="phoneNumber" name="phoneNumber" type="text" defaultValue={createFormValues?.phoneNumber} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input onChange={formValuesHandler}  id="imageUrl" name="imageUrl" type="text" defaultValue={createFormValues?.imageUrl} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input onChange={formValuesHandler} id="country" name="country" type="text" defaultValue={createFormValues?.country} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input onChange={formValuesHandler} id="city" name="city" type="text" defaultValue={createFormValues?.city} />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input onChange={formValuesHandler} id="street" name="street" type="text" defaultValue={createFormValues?.street} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input onChange={formValuesHandler} id="streetNumber" name="streetNumber" type="text" defaultValue={createFormValues?.streetNumber} />
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button onClick={onCloseCreate} id="action-cancel" className="btn" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}