import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth/useAuth";
import './CheckOutForm.css'

const CheckOutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState(' ');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if(price > 0){
      axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        // console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret);
      })
    }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    // console.log('card', card);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('error ', error);
      setCardError(error.message);
    }
    else {
      setCardError(' ');
      console.log('Payment method ', paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown',
          },
        },
      },
    );
    if (confirmError) {
      setCardError(confirmError)
    }

    console.log(paymentIntent)
    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      //save payment info to server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item.menuItemId),
        status: 'service pending',
        itemNames: cart.map(item => item.name)

      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.result.insertedId) {
            //display confirm
          }
        })
    }

  }

  return (
    <>
      <div >
        <form onSubmit={handleSubmit} >
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '18px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <div className="flex justify-center mx-8">
            <button className="btn btn-primary px-12  " type="submit" disabled={!stripe || !clientSecret || processing}>
              Pay
            </button>
          </div>
        </form>
        {
          cardError && <p className="text-red-700">{cardError}</p>
        }
        {transactionId && <p className="text-green-500">Transaction Complete with transactionID: {transactionId}</p>}
      </div>
    </>
  );
};

export default CheckOutForm;