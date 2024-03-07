import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// Description : Auth user  & get token
// route : POST /api/users/login
// acess : Public


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(401).send({
            error: 'invalid email or password'
        });

    }
})

// Description : register user
// route : POST /api/users/
// acess : Public


const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
})

// Description : logout user / clear cookies
// route : POST /api/users/logout
// acess : Private


const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
})

// Description : get user profile
// route : GET /api/users/profile
// acess : Private


const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

// Description : UPDATE user profile
// route : PUT /api/users/profile
// acess : Private


const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
})

// Description : GET user profile
// route : GET /api/users/users
// acess : Private/Admin


const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})

// Description : Get user by ID
// route : PUT /api/users/users:id
// acess : Private/Admin


const getUserbyID = asyncHandler(async (req, res) => {
    res.send('get user by ID')
})

// Description : DELETE user profile
// route : DELETE /api/users/users/:id
// acess : Private/Admin


const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete users')
})

// Description : Update user 
// route : PUT /api/users/users/:id
// acess : Private/Admin


const updateUser = asyncHandler(async (req, res) => {
    res.send('update users')
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserbyID, updateUser } 