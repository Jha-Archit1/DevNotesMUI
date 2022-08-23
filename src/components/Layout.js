import { ClassNames } from '@emotion/react'
import { makeStyles } from '@mui/styles'
import { Drawer } from '@mui/material'
import {Typography} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#CFD2CF'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px) !important`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: '1'
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

export default function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

  return (
    <div className={classes.root}>
        <AppBar
            className={classes.appbar}
            elevation={0}
        >
            <Toolbar>
                <Typography className={classes.date}>
                  Today is the  { format(new Date(), 'do MMMM Y')}
                </Typography>
                <Typography>
                    Archit
                </Typography>
                <Avatar src="/person.jpg" className={classes.avatar}/>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper}}
        >
            <div>
                <Typography variant="h5" className={classes.title}>
                    DevNotes
                </Typography>
            </div>

            <List>
                {menuItems.map(item => (
                    <ListItem
                       key={item.text}
                       className={location.pathname == item.path ? classes.active : null}
                    > 
                    <ListItemButton
                        onClick={() => history.push(item.path)} 
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItemButton>
                    </ListItem> 
                ))}
            </List>

        </Drawer>
        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
    </div>
  )
}
