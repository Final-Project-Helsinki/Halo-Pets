import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory, useParams, useLocation} from 'react-router-dom'
import axios from 'axios'
import AppBar from '../components/AppBar'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  FormControl
} from '@material-ui/core'


export default function TesMidtrans(){
  const [snapToken, setSnapToken] = useState('')
  const [loading, setLoading] = useState(false)
  const user = useSelector(state => state.userReducer.userLogin)
  const price = 20000
  const location = useLocation()
  // const name = useParams().name

  const history = useHistory()
  const [open, setOpen] = useState(false)

  function handleMainOpen(isOpen) {
    setOpen(isOpen)
  }

  useEffect(() => {
    console.log('masuk use effect')
    setLoading(true)
    console.log(location.state)
    axios({
      method: 'GET',
      url: `http://localhost:3001/midtrans/${user.name}/${price}`
    })
    .then(({data}) => {
      console.log(data)
      setSnapToken(data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err.response)
      setLoading(false)
    })
  }, [user, price])

  function formatRupiah(price){
    return price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
  }

  function handleOnClick(e){
    e.preventDefault()
    window.snap.pay(snapToken, {
    onSuccess: function(result){console.log('success', result);history.push({pathname: '/chat', state: location.state});},
    onPending: function(result){console.log('pending', result); history.push({pathname: '/chat', state: location.state});},
    onError: function(result){console.log('error', result );history.push('/home');},
    onClose: function(){console.log('customer closed the popup without finishing the payment');}
  })
  }
  if(loading){
    return <p>loading</p>
  }
  return (
    <div>
      <AppBar handleMainOpen={handleMainOpen} />
        <Card>
          <CardContent>
            <Typography variant="h4">Snap Payment Integration Demo</Typography>
            <hr/>
            <Typography variant="h5">Purchase Summary</Typography>
            <List>
              <ListItemText><b>Customer Name:</b> {user.name} </ListItemText>
              <ListItemText><b>Total Purchase:</b> {formatRupiah(price)}</ListItemText>
            </List>
          </CardContent>
          <CardActions>
          <FormControl>
            <Button variant="contained" color="primary" onClick={handleOnClick} >Proceed to Payment</Button>
          </FormControl>
          </CardActions>       
          <div id="snapjs">
            <script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js"
              data-client-key="SB-Mid-client-GrffCMN7wG9DYfV6"></script>
          </div>
        </Card>
    </div>
    
  )
}



