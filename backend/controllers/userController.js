import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs'




// Description : Auth user  & get token
// route : POST /api/users/login
// acess : Public


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (user && isValidPassword) {
        generateToken(res, user._id);

        res.status(200).json({
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
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email });

    if (userExist) {
        // 400 mean client error :
        res.status(400).send({
            error: 'User already exist'
        })
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id);
        res.status(201).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(400).send({
            error: 'Invalid user Data'
        })
    }
})

// Description : logout user / clear cookies
// route : POST /api/users/logout
// acess : Private


const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'logged out successfully' })
})

// Description : get user profile
// route : GET /api/users/profile
// acess : Private


const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404).send({
            error: 'User not found'
        })
    }
})

// Description : UPDATE user profile
// route : PUT /api/users/profile
// acess : Private


const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    } else {
        res.status(404).send({
            error: 'User not found'
        })
    }
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