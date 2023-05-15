import asyncHandler from 'express-async-handler'
import Order from "../models/orderModel"

const addOrderItems = asyncHandler(async(req, res) => {
    const {
    orderItems, 
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
    } = req.body

    //If there is an orderItems but it is empty order inside. 
    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            orderItems,
            //protect unwrap the token and it will get the data from it 
            //In the protect function in the authMiddleware.
            //req.user = await User.findOne(decoded.id).select('-password')
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
})

const getOrderById = asyncHandler(async(req, res) => {
    //There is a relation with user and product columns so you can get the name and email field from 'user' collection. 
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

const updateOrderToPaid = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id)
    if(order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }

        const updatedOrder = await order.save()
        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error ('Order not found')
    }

})


export {addOrderItems, getOrderById, updateOrderToPaid}