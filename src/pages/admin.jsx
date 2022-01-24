import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, progress,reject,settle } from '../redux/action';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({handleReject,handleProgress,handleSettle,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onReject = () =>{
      handleReject()
      axios.patch(`http://localhost:3000/items/${id}`, {
        status: 'reject'
      })
      .then(response => {
        console.log(response);
      })
  }
  const onProgress = () =>{
    handleProgress()
    axios.patch(`http://localhost:3000/items/${id}`, {
      status: 'in-progress'
    })
    }
    const onSettle = () =>{
        handleSettle()
        axios.patch(`http://localhost:3000/items/${id}`, {
        status: 'settle'
    })
    } 
  return (
    <div>
      <Button onClick={handleOpen}>edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button style={{width:'120px',height:'35px',backgroundColor:'teal'}} onClick={onReject}>reject</button>
          <button style={{width:'120px',height:'35px',backgroundColor:'teal'}} onClick={onProgress}>inProgress</button>
          <button style={{width:'120px',height:'35px',backgroundColor:'teal'}} onClick={onSettle}>settle</button>
        </Box>
      </Modal>
    </div>
  );
}
const Table = ({name,date,status,purpose,amount})=>{
    const cardStyle = {
        width:'1000px',
        height:'80px',
        display: 'flex',
        padding: '1.5rem',
        gap:'5rem',
        justifyContent: 'center',
        margin:'auto',
        marginTop: '25px'
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
export const Admin = ()=>{
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
    },[])
    return (
        <div>
        {data?.map((item)=>(
            <div key={item.id} style={{display: 'flex',border: '1px solid black',width:'80%',margin:'auto'}}>
            <Table  name={item.name} date={item.date} status={item.status} purpose={item.purpose} amount={item.amount} />
            <BasicModal handleReject={()=>{dispatch(reject(item.id))}} handleProgress={()=>{dispatch(progress(item.id))}} handleSettle={()=>{dispatch(settle(item.id))}} id={item.id}/>
            </div>
        ))}
        </div>
    )
}