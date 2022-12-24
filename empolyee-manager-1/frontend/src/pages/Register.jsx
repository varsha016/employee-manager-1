import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


import userAddAction from '../store/user/userAction'


///////
import { Autocomplete, Box, Button, Card, CardActionArea, CardContent, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userAdd } = useSelector(state => state.allUsers)
    const [data, setData] = useState({
        name: '',
        profile: 'https://media.istockphoto.com/photos/portrait-of-a-confident-young-businessman-standing-with-his-arms-in-picture-id1391718981?b=1&k=20&m=1391718981&s=170667a&w=0&h=5d95EBImyoEm7hhfgqm5tQgsJ1iTvvzbKqLLqMu-vZA=',
        email: 'kate@gmail.com',
        password: '1234',
        gender: '',
        role: ''



    })

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(userAddAction(data))
        console.log(data);

    }


    useEffect(() => {
        if (userAdd) {
            toast.success("user Added successFully")
            navigate('/login')
        }
    }, [userAdd])


    return <>
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-sm-3">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>

                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    <Box component="form" onSubmit={handleSubmit}>
                                        <Box className='m-2'>

                                            <TextField label="Name" variant="outlined" type="text"
                                                value={data.name}
                                                className="form-control" onChange={e => setData({ ...data, name: e.target.value })}

                                                id="name"
                                                placeholder="Enter your name" />
                                        </Box>
                                        <Box className='2'>

                                            <TextField label="Profile" variant="outlined" type="text"
                                                value={data.profile}
                                                className="form-control" onChange={e => setData({ ...data, profile: e.target.value })}

                                                id="profile"
                                                placeholder="Enter your profile" />


                                        </Box>
                                        <Box className="mt-2">

                                            <TextField label="Email" variant="outlined" type="email"
                                                value={data.email}
                                                className="form-control" onChange={e => setData({ ...data, email: e.target.value })}
                                                id="email"
                                                name='email'
                                                placeholder="Enter Your Email" />

                                        </Box>
                                        <Box className="mt-2">

                                            <TextField label="Password" variant="outlined" type="text"
                                                value={data.password}
                                                className="form-control" onChange={e => setData({ ...data, password: e.target.value })}
                                                id="password"
                                                name='password'
                                                placeholder="Enter Your Password" />
                                        </Box>
                                        <Box className="mt-2 d-flex justifly-content-between">
                                            <FormControl>
                                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"

                                                >
                                                    <FormControlLabel value="female" control={<Radio />} label="Female"
                                                    />
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                </RadioGroup>
                                            </FormControl>

                                        </Box>

                                        <Box className="mt-2">
                                            <Select displayEmpty sx={{ width: 300 }} onChange={e => setData({ ...data, role: e.target.value })} value={data.role}>
                                                <MenuItem value="" disabled>Select</MenuItem>
                                                <MenuItem value="backend">backend</MenuItem>
                                                <MenuItem value="frontend">frontend</MenuItem>
                                                <MenuItem value="other">Other</MenuItem>
                                            </Select>


                                        </Box>
                                        <Button type='submit' variant='contained' color='success' className="btn btn-primary w-100 mt-3">
                                            Signup
                                        </Button>
                                        <p className="text-center mt-3">
                                            Already Have Account? <a href="#">Login</a>
                                        </p>
                                    </Box>

                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
            </div>
        </div >
    </>
}

const roleOption = [{
    label: "backend",
    label: "Frontend",
    label: "Other"
}]


