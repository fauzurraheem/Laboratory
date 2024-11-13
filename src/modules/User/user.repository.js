import User from '../../database/models/user'
import bcrypt from 'bcryptjs';
import { generateRandomNumbers, getPagination } from '../../helpers/helpers';
const uuidv1 = require('uuid/v4');




/**
 * query user details in the DB by phone or username
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByPhoneOrUsername(data) {
  return await User.findOne({ 
    phone: data.phone , 
    username: data.username
  });
}

/**
 * query user account in the DB by username
 *
 * @function
 * @returns {json} json object with user data
 * @param data
 */
export async function findUserByUsername(data) {
  return User.findOne({ username: data.username });
}


export async function createUser(data) {
  const { name, gender, email, address, phone, date_of_birth } = data;
  const username = `${name.split(' ')[0].toLowerCase()}${generateRandomNumbers(3)}`;

  const uniq = uuidv1();
  const tempPassword = uniq.substr(uniq.length - 7).toUpperCase();

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(tempPassword, salt);

  return User.create({
    id:uuidv1(),
    name,
    gender,
    email,
    password,
    address,
    phone,
    username,
    date_of_birth,
  });
}

export async function searchUsers(currentPage = 1, pageLimit = 10, search) {

  console.log(search,"Search");
  
  const {skip, limit} = getPagination({limit:pageLimit, page:currentPage})

  return await User.find({name:search},{
    '_id':0, '__v':0, 'password':0
  }).sort({name: 1}).skip(skip).limit(limit)
}

/**
 * get users
 *
 * @function
 * @returns {json} json object with users data
 * @param currentPage
 * @param pageLimit
 */
export async function getUsers(currentPage = 1, pageLimit = 10) {
  
  const {skip, limit} = getPagination({limit:pageLimit, page:currentPage})

  return await User.find({},{
    '_id':0, '__v':0, 'password':0
  }).sort({name: 1}).skip(skip).limit(limit)
}




