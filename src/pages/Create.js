import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const btnStyles = {
  fonSize: 60,
  backgroundColor: 'violet',
  '&:hover' : {
    backgroundColor: 'blue'
  }
}

const fieldStyles = {
  marginTop: 5,
  marginBottom: 5,
  display: 'block'
}

export default function Create() {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    
    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title,details,category})
      }).then(() => history.push('/'))
    }
  }
  return (
      <Container>
        <Typography 
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a New Note
        </Typography>

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField 
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            variant='outlined'
            color="secondary"
            fullWidth
            required
            sx={fieldStyles}
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)} 
            label="Details"
            variant='outlined'
            color="secondary"
            fullWidth
            required
            multiline
            rows={4}
            sx={fieldStyles}
            error={detailsError}
          />
          
          <FormControl sx={fieldStyles}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="todos" control={<Radio />} label="ToDos"/>
            <FormControlLabel value="reminder" control={<Radio />} label="Reminder"/>
            <FormControlLabel value="work" control={<Radio />} label="Work"/>
            <FormControlLabel value="personal" control={<Radio />} label="Personal"/>
          </RadioGroup>
          </FormControl>

          <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIosOutlinedIcon />}
          // sx={btnStyles}
        >
          Submit
        </Button>
        </form>
      </Container>
  )
}
