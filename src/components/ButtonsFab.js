// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import Icon from '@mui/material/Icon';
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'



// ** Icon Imports


const ButtonsFab = () => {
    return (
        <>
            <hr />
            <Typography sx={{ fontWeight: 500 }}>Circular Variante</Typography>
            <Box sx={{ mb: 6 }}>
                <Fab arie-label='edit' color='primary'><Icon>add</Icon></Fab>
                <Fab arie-label='edit' color='secondary'><Icon>delete</Icon></Fab>
                <Fab arie-label='edit' color='success'><Icon>autorenew</Icon></Fab>
                <Fab arie-label='edit' color='info'><Icon>shopping_cart_checkout</Icon></Fab>
                <Fab arie-label='edit' color='warning'><Icon>library_add</Icon></Fab>
                <Fab arie-label='edit' color='primary'><Icon>settings</Icon></Fab>
                <Fab arie-label='edit' color='primary'><Icon>add_task</Icon></Fab>
                <Fab arie-label='edit' color='primary'><Icon>mark_email_read</Icon></Fab>
                <Fab arie-label='edit' color='error'><Icon>favorite</Icon></Fab>
            </Box>
            <hr />
            <div className='demo-space-x'>
                <Chip label='Default' avatar={<Avatar />} />
                <Chip
                    label='Previous'
                    color='primary'
                    variant='outlined'
                    avatar={<Avatar><Icon>arrow_circle_left</Icon></Avatar>} />
                <Chip
                    label='Next'
                    color='primary'
                    variant='outlined'
                    avatar={<Avatar><Icon>arrow_circle_right</Icon></Avatar>}

                />
                <Chip label='Howard Paul' avatar={<Avatar src='/h2.jpg' alt='User Avatar' />} />
                <Chip label='Maurice Bell' avatar={<Avatar>M</Avatar>} />
            </div>


        </>
    )
}

export default ButtonsFab
