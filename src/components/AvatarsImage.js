// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'




const AvatarsImage = () => {
    return (
        <Box className='demo-space-x' sx={{ display: 'flex' }}>
            <Avatar src='/m1.jpg' alt='Victor Anderson' color='primary' />
            <Avatar src='/m2.jpg' alt='Alice Cobb' />
            <Avatar src='/h1.jpg' alt='Jeffery Warner' sx={{ width: 56, height: 56 }} />
            <hr />
            <div className='demo-space-x'>
                <Badge badgeContent={4} color='secondary' sx={{ width: 56, height: 56 }}>
                    <Avatar src='/h2.jpg' alt='User Avatar' />
                </Badge>
            </div>
            <hr />
            <div>
                <Button variant='contained'> Primary</Button>
                <Button variant='contained' color='secondary'> Secundary</Button>
                <Button variant='contained' disabled> Desabled</Button>
                <Button variant='contained' size='large' > Enviar</Button>
            </div>
        </Box>



    )
};
export default AvatarsImage