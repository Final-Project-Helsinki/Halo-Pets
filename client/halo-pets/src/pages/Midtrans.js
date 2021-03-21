import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'


export default function TesMidtrans(){
  const [snapToken, setSnapToken] = useState('')
  const user = useSelector(state => state.userReducer.userLogin)
  const price = 200000
  // const name = useParams().name

  const history = useHistory()

  useEffect(() => {
    console.log('masuk use effect')
    axios({
      method: 'GET',
      url: `http://localhost:3001/midtrans/aldo/${price}`
    })
    .then(({data}) => {
      console.log(data)
      setSnapToken(data)
    })
    .catch(err => {
      console.log(err.response)
    })
  }, [user, price])

  function formatRupiah(price){
    return price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
  }

  function handleOnClick(e){
    e.preventDefault()
    window.snap.pay(snapToken, {
    onSuccess: function(result){console.log('success', result);history.push('/home');},
    onPending: function(result){console.log('pending', result); history.push('/home')},
    onError: function(result){console.log('error', result );history.push('/home');},
    onClose: function(){console.log('customer closed the popup without finishing the payment');}
  })
  }
  return (
    <div>
      <p>{user.name}</p>
      <h4>Snap Payment Integration Demo</h4>
      <hr/>
      <h5>Purchase Summary</h5>
      <small>
        <li><b>Customer Name:</b> {user.name} </li>
        <li><b>Total Purchase:</b> {formatRupiah(price)}</li>
      </small>
      <br/>
      <form id="snaphtml" class="input-group" formTarget="_blank">
        <input type="text" id="snap-token" value={`${snapToken}`} class="form-input" onChange={(e) => setSnapToken(e.target.value)} />
        <button id="pay-button" class="btn btn-primary input-group-btn" onClick={handleOnClick} >Proceed to Payment</button>
      </form>
      <small>
        <ul>
          <li>That string above is "Snap Transaction Token" retrieved from API response, on backend</li>
        </ul>
      </small>
      <br/>
      <hr/>
          
      <div id="snapjs">
        <script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key="SB-Mid-client-GrffCMN7wG9DYfV6"></script>

        {/* <script type="text/javascript">
          var payButton = document.getElementById('pay-button');
          payButton.addEventListener('click', function() {
            var snapToken = document.getElementById('snap-token').value;
            snap.pay(snapToken);
          });
        </script> */}
      </div>
      {/* <script>
        document.getElementById('snapjs-view').innerText
          = document.getElementById('snaphtml').innerHTML
          +document.getElementById('snapjs').innerHTML;
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/highlight.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/languages/javascript.min.js"></script>
      <script>hljs.initHighlightingOnLoad();</script> */}
    </div>
  )
}