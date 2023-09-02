const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from 'next/server';

export async function POST(request) {
   
        try {
            const req = await request.json();
            const products = req.items;

            const lineItems = products.map(item => ({
            quantity: item.quantity,
            price_data: {
                currency: 'usd',
                product_data:{
                    name:item.name,
                    images: [item.image],
                },
                unit_amount: item.price*100
                }
            }));

            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: `${process.env.SITE_URL}success`,
                metadata:{
                    items: JSON.stringify(products.map(item=>({productId:item.id,amount:item.quantity}))),
                    accessToken: req.token
                }
            });
            return NextResponse.json(session.url);
        } catch (error) {
            return NextResponse.json({ error: error }, { status: 500 })
        }
    
   
}