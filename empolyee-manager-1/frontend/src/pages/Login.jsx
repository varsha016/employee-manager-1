import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userLoginAction } from '../store/user/userAction'
///////material ui start////
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, TextField } from '@mui/material';
///////material ui end////

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loginUsers } = useSelector(state => state.allUsers)
    // const [toggle, settoggle] = useState(true)
    const [loginData, setLoginData] = useState({
        email: 'kate@gmail.com',
        password: '1234',
    })
    useEffect(() => {
        if (loginUsers) {
            toast.success("user login successFully")


        }
    }, [loginUsers])



    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <Card sx={{ maxWidth: 345, marginTop: 4 }}>
                        <CardActionArea>

                            <CardContent sx={{ marginTop: 2 }}>

                                <Typography variant="body2" color="text.secondary">
                                    <Box sx={{ marginTop: 2 }}>
                                        <TextField label="Outlined" variant="outlined" type="text"
                                            value={loginData.email}
                                            class="form-control"
                                            id="email"
                                            name='email'
                                            placeholder="Enter Your Email"
                                            onChange={e => setLoginData({ ...loginData, email: e.target.value })} />
                                    </Box>

                                    <Box sx={{ marginTop: 2 }}>
                                        <TextField label="Outlined" variant="outlined" type="text"
                                            value={loginData.password}
                                            class="form-control"
                                            id="password"
                                            name='password'
                                            placeholder="Enter Your Email"
                                            onChange={e => setLoginData({ ...loginData, password: e.target.value })} />
                                    </Box>



                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='d-flex justify-content-center '>
                            <Button size="small" type='submit' color="success" className='w-100' variant='contained' onClick={e => {
                                dispatch(userLoginAction(loginData))
                                navigate("/")
                            }}>
                                Login
                            </Button>
                        </CardActions>
                    </Card>
                    {/* <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <div class="mt-2">
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    value={loginData.email}
                                    class="form-control" onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                                    id="email"
                                    name='email'
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="text"
                                    value={loginData.password}
                                    class="form-control" onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                                    id="password"
                                    name='password'
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button type="submit" onClick={e => {
                                dispatch(userLoginAction(loginData))
                                navigate("/")
                            }} class="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p class="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
}
