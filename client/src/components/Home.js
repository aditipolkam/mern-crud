import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Home = () => {
    return(
        <div className="mt-5">
            <h1>Home</h1>
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary">Add Data</button>
                </div>

                <table class="table">
                    <thead>
                        <tr className="table-dark">
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job</th>
                        <th scope="col">Contact</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>mark@gmail.com</td>
                        <td>SDE</td>
                        <td>3547698789</td>
                        <td className="d-flex justify-content-between">
                            <button className="btn btn-success"><VisibilityIcon/></button>
                            <button className="btn btn-primary"><BorderColorIcon/></button>
                            <button className="btn btn-danger"><DeleteIcon/></button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;