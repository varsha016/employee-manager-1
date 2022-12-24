import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../store/user/userAction'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.allUsers)

    useEffect(() => {
        dispatch(getUserAction())

    }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">

                    {users.map(item => <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={item.profile}
                            alt="users"
                        />
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>)}
                </div>
            </div>
        </div>



    </>
}
