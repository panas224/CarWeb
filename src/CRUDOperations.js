import React from "react";
import {AddUser} from "./components/AddUser";
import {EditUser} from "./components/EditUser";

function CRUDOperations() {
    return (
        <div className="CRUD">
            <AddUser/>
            <EditUser/>
        </div>
    );
}

export default CRUDOperations;