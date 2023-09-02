import { cookies, headers } from 'next/headers';
import { NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;


const pushItems = async(data) => {

    const token = data.metadata.accessToken;

    const total = data.amount_total/100;
    const order = await fetch('https://ecommerce-api-k3g5.onrender.com/api/v1/orders',{
        method: 'POST',
        body: JSON.stringify({total}),
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        cache: 'no-store',
    }).then(res => res.json());



    const orderId = order.id;
    const products = JSON.parse(data.metadata.items);
    const items = products.map(item => ({
        orderId,
        productId: item.productId,
        amount: item.amount
    }));

    const pushItemsToDataBase = await fetch('https://ecommerce-api-k3g5.onrender.com/api/v1/orders/add-item',{
    method: 'POST',
    body: JSON.stringify({items:items}),
    headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
    },
    cache: 'no-store',
    });
  
}

export async function POST(request) {

    let event; 
    
    try {
        const body = await request.text();
        event = stripe.webhooks.constructEvent(body,request.headers.get("stripe-signature"),endpointSecret);
        if(event.type === 'checkout.session.completed'){
            await pushItems(event.data.object);
        }
        return NextResponse.json(event.data.object);
    } catch (error) {
        console.log(error.message);
        return NextResponse.json(error);
    }
    

}

