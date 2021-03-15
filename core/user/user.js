const userModel = require('../../models/user');

class User{
    find(body){
        return new Promise((resolve,reject)=>{
            userModel.find().skip(parseInt(body.offset)).limit(parseInt(body.limit))    //get user data according to given offset and limit
            .then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err)
            });
        });
    }

    save(body){
        return new Promise((resolve,reject)=>{  
            const user = new userModel({
                user_name : body.user_name,
                password : body.password
            });
            user.save()     //save the received user data
            .then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        })
    }

    update(body){
        return new Promise((resolve,reject)=>{
            userModel.updateOne(        //update the username of the user
                {user_name : body.user_name},
                {user_name : body.new_user_name}
            ).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        })
    }

    destroy(body){
        return new Promise((resolve,reject)=>{
            userModel.deleteOne(        //delete the user with the given username
                {user_name : body.user_name}
            ).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })
    }
}

module.exports = {
    UserClass : User
}