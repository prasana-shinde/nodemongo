const user = require('../../core/user/user');

const {find,save,update,destroy} = new user.UserClass();

const findUsers = async(body)=>{
    const result = await find(body);
    return result;
};

const saveUser = async(body)=>{
    const result = await save(body);
    return result;
};

const updateUser = async(body)=>{
    const result = await update(body);
    return result;
};

const destroyUser = async(body)=>{
    const result = await destroy(body);
    return result;
};

module.exports = {findUsers,saveUser,updateUser,destroyUser};