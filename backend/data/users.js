import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mohammed Rochdi',
        email: 'mohammed@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Ahmed Rochdi',
        email: 'ahmed@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users