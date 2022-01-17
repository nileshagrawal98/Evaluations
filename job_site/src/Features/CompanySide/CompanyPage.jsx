import { Button, Input } from "antd"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addJob, addJobFailed, addJobLoading, addJobSuccess } from "./actions";
import { ADD_JOB_LOADING } from "./actionTypes";

export const CompanyPage = () => {

    const userRole = useSelector(state => state.authState.role);

    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');

    const dispatch = useDispatch();

    const handleAddJob = () => {
        const payload = { company, title, salary, description, location, type, applied: false};
        dispatch(addJobLoading());
        fetch('http://localhost:3001/jobs/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(data => dispatch(addJobSuccess(data)))
        .catch(err => dispatch(addJobFailed(err)))
    }

    if(userRole !== 'admin' && userRole !== 'company'){
        return <h2>You are not allowed to use this page</h2>
    }

    return <div>
        <h2>Enter New Job: </h2>
        <div style={{ width: '600px', margin: '10px auto' }}>
            <Input placeholder="Company Name" value={company} onChange={e => setCompany(e.target.value)} />
            <Input placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
            <Input placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} type="number"/>
            <Input placeholder="Job Description" value={description} onChange={e => setDescription(e.target.value)} />
            <Input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
            <Input placeholder="Job Type" value={type} onChange={e => setType(e.target.value)} />
            <Button onClick={handleAddJob}>Add Job</Button>

        </div>
    </div>

}