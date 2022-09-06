import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/* JWT secret key */
const KEY = "mgg jwt secret key";
/* Users collection sample */
const USERS = [
  {
    id: 1,
    email: 'admin@gmail.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 2,
    email: 'example2@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 3,
    email: 'example3@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 4,
    email: 'example4@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
];

export default (req, res) => {
  return new Promise(resolve => {
    const { method } = req;
    try {
      switch (method) {
        case 'POST':
          /* Get Post Data */
          const { email, password } = req.body;
          /* Any how email or password is blank */
          if (!email || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Request missing username or password',
            });
          }
          /* Check user email in database */
          const user = USERS.find(user => {
            return user.email === email;
          });
          /* Check if exists */
          if (!user) {
            /* Send error with message */
            res.status(400).json({ status: 'error', error: 'User Not Found' });
          }
          /* Variables checking */
          if (user) {
            const userId = user.id,
              userEmail = user.email,
              userPassword = user.password,
              userCreated = user.createdAt;
            /* Check and compare password */
            bcrypt.compare(password, userPassword).then(isMatch => {
              /* User matched */
              if (isMatch) {
                /* Create JWT Payload */
                const payload = {
                  id: userId,
                  email: userEmail,
                  createdAt: userCreated,
                };
                /* Sign token */
                jwt.sign(
                  payload,
                  KEY,
                  {
                    expiresIn: 31556926, // 1 year in seconds
                  },
                  (err, token) => {
                    /* Send succes with token */
                    res.status(200).json({
                      success: true,
                      token: 'Bearer ' + token,
                    });
                  },
                );
              } else {
                /* Send error with message */
                res
                  .status(400)
                  .json({ status: 'error', error: 'Password incorrect' });
              }
            });
          }
          break;
        case 'GET':
          break;
        case 'PATCH':
          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
    return resolve();
  });
};