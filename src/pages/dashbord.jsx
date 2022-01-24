import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/action';
import Userinput from './user';
const Table = ({name,date,status,purpose,amount})=>{
    const cardStyle = {
        width:'1200px',
        height:'80px',
        border: '1px solid black',
        display: 'flex',
        padding: '1.5rem',
        gap:'5rem',
        justifyContent: 'center',
        marginTop: '25px',
        margin: 'auto'
    }
    return (
        <div style={cardStyle}>
            <div>{name}</div>
            <div>
                <div>date</div>
                <div>{date}</div>
            </div>
            <div>
                <div>status</div>
                <div>{status}</div>
            </div>
            <div>
                <div>purpose</div>
                <div>{purpose}</div>
            </div>
            <div>
                <div>amount</div>
                <div>{amount}</div>
            </div>
        </div>
    )
}
export const Dashboard = ()=>{
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.data);
    const isLoading = useSelector((state)=>state.isLoading);
    const isError = useSelector((state)=>state.isError);
    React.useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://localhost:3000/items'
        }
        dispatch(getData(config))
    },[dispatch])
    return (
        <div>
        {data?.map((item)=>(
            <Table key={item.id} name={item.name} date={item.date} status={item.status} purpose={item.purpose} amount={item.amount} />
        ))}
        </div>
    )
}