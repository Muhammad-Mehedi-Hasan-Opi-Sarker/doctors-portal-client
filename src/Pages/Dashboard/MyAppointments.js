import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.git';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
              method:'GET',
              headers:{
                  'authorization': `Bearer ${localStorage.getItem('accesToken')}`
              }  
            })
                .then(res => {
                    console.log('res',res)
                    if(res.status === 401 || res.status===403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                   return res.json()})
                .then(data =>{
                    
                    setAppointments(data)})
        }
    }, [user])
    return (
        <div>
            <h1>My appoinments {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a,index)=><tr>
                                <th>{index}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;