import { Table } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getJobLoading, getJobSuccess, getJobFailed } from "./actions";

export const ClientPage = () => {

    const { jobs, loading, error } = useSelector((state) => ({ jobs: state.clientState.jobs, loading: state.clientState.loading, error: state.clientState.error }));

    const dispatch = useDispatch();
    const userRole = useSelector(state => state.authState.role);


    const getData = () => {
        dispatch(getJobLoading());
        fetch('http://localhost:3001/jobs/')
            .then(res => res.json())
            .then(data => dispatch(getJobSuccess(data)))
            .catch(err => dispatch(getJobFailed(err)))
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company'
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
            sorter: (a, b) => a.salary - b.salary,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'Applied',
            dataIndex: 'applied',
            key: 'applied',
            render: (record, item) => <span onClick={() => handleApplyJob(item.id, item.applied)}>{item.applied ? 'Yes' : 'No'}</span>
        }
    ]

    if (userRole !== 'client' && userRole !== 'admin') {
        return <h2>You are not allowed to use this page</h2>
    }

    const handleApplyJob = (id, curr) => {
        console.log(id, curr)
        fetch(`http://localhost:3001/jobs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({"applied": !curr}),
            Headers: {
                "Content-type": "application/json"
            }
        }).then(() => getData());
    }


    return loading ? <h1>Loading...</h1> : error ? <h1>Error</h1> : <div style={{ maxWidth: '1000px', margin: '10px auto' }}>
        <h2>Available Jobs</h2>
        <Table columns={columns} dataSource={jobs} rowKey="id"/>
        <br />


    </div>
}