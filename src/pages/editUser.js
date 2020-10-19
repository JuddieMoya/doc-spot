
import React from "react";
import { MenuContainer } from "../components";
import { GetUsernameContainer } from "../components/";
import { ProfilePicLoaderContainer } from "../components/";
import Api from '../utils/api';
import { Card, Nav } from 'react-bootstrap'
export const ProfileScreen = () => {
    async function deleteUser() {
        // call the delete user endpoint
        // and await its response
        await Api.deleteUser(window.location.pathname.split('/')[2]);


        window.location.pathname = '/';
    }

    return (<>
        <MenuContainer />
        <h2>Profile</h2>
        <GetUsernameContainer />
        <button type="button" className=""
            onClick={deleteUser}>
            Delete User
    </button>
        <form>

            <label>age</label>
            <input type="number"></input>
            <br />
            <label>sex</label>
            <input type="checkbox" id="patient1" name="patient2" value="Female" />
            <label for="patient1"> Female</label>

            <input type="checkbox" id="patient2" name="patient2" value="Male" />
            <label for="patient2"> Male </label>
            <br />
            <label>tobaccoUse</label>
            <input type="checkbox" id="tobaccoUse" name="tobaccoUse" value=" Yes" />
            <label for="tobaccoUse"> Yes </label>
            <input type="checkbox" id="tobaccoUse" name="tobaccoUse" value=" No" />
            <label for="tobaccoUse"> No</label>
            <br />
            <label>Email</label>
            <input type="email"></input>

        </form>
        <ProfilePicLoaderContainer />
    </>)
};
