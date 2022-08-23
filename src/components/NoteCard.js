import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Avatar from '@mui/material/Avatar';
import { blue, green, pink, yellow } from '@mui/material/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category == 'work') {
                return yellow[700]
            }
            if(note.category == 'personal') {
                return green[500]
            }
            if(note.category == 'todos') {
                return pink[500]
            }
            return blue[500]
        }
    }
})

export default function NoteCard({note, handleDelete}) {

    const classes = useStyles(note)

    const avatarColor = {
        backgroundColor: note.category == "work" ? yellow[700] : note.category == "reminders" ? green[500] : note.category == "todos" ? pink[500] : blue[500]
    }

  return (
    <div>
        <Card elevation={3}>
            <CardHeader
                avatar ={
                    <Avatar sx={avatarColor}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                } 
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title={note.title}
                  subheader={note.category}
            />
            <CardContent>
            <Typography variant='body2' color="textSecondary">
                {note.details}
            </Typography>
        </CardContent>
        </Card>
    </div>
  )
}
