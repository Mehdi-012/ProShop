import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/OrderModel.js'

// @decs Create new order
// @route POST /api/products
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
   res.send('add order items');
});


// @decs Get logged in user order
// @route GET /api/orders/myorders
// @access Private

const getMyOrders = asyncHandler(async (req, res) => {
   res.send('get my orders');
});

// @decs Get order by ID
// @route GET /api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
   res.send('get order by ID');
});

// @decs Update orde to paid
// @route GET /api/orders/:id/pay
// @access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
   res.send('update order to paid');
});

// @decs Update orde to delivered
// @route GET /api/orders/:id/deliver
// @access Private/admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
   res.send('update order to delivered');
});

// @decs Get all orders
// @route GET /api/orders
// @access Private/Admin

const getOrders = asyncHandler(async (req, res) => {
   res.send('get all orders');
});

export { 
   addOrderItems,
   getMyOrders,
   getOrderById,
   updateOrderToPaid,
   updateOrderToDelivered,
   getOrders
}