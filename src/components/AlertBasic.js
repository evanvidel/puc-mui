// ** MUI Imports
import Alert from '@mui/material/Alert'

const AlertsBasic = () => {
  return (
    <div className='demo-space-y'>
      <Alert severity='error'>Este é um alerta de erro — confira!</Alert>
      <Alert severity='warning'>Este é um alerta de alerta - confira!</Alert>
      <Alert severity='info'>Este é um alerta de informações - confira!</Alert>
      <Alert severity='success'>Este é um alerta de sucesso - confira!</Alert>
    </div>
  )
}

export default AlertsBasic
