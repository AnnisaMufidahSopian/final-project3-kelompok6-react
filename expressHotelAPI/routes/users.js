const express = require('express')
const router = express.Router()
const UsersModel = require('../models/users')
const bcrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')

// routing endpoint users utama
router.get('/', async(req, res, next) => {
    const users = await UsersModel.findAll()
    const filters = req.query;
    const filteredUsers = users.filter(user => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
    res.status(200).json({
        data: filteredUsers,
        metadata: "test user end point success"
    })
})

router.post('/', async(req, res) => {
    // no ktp, nama, password ->>>>>>>>>>>>>>>>> BE nangkep
    const { no_ktp, nama_depan, nama_belakang, email, jenis_kelamin, password, poto } = req.body
    // meng enkripsi data
    const encryptPassword = await bcrypt.hash(password, 10)
    // meng  create data
    const users = await UsersModel.create({
        no_ktp, nama_depan, nama_belakang, email, jenis_kelamin, password :encryptPassword, poto
    })
    res.status(200).json({
        registered: users,
        metadata: "test add user end point success"
     })
})

router.put('/', async(req, res) => {
    // nip, nama, password ->>>>>>>>>>>>>>>>> BE nangkep
    const { no_ktp, nama_depan, nama_belakang, email, jenis_kelamin, password, passwordBaru, poto } = req.body
    const userData = await UsersModel.findOne({ where: { no_ktp: no_ktp } })
    const compare = await bcrypt.compare(password, userData.password)
    const encryptPassword = await bcrypt.hash(passwordBaru, 10)
    //password yang muncul di db === password dari input
    if( compare === true){
        const users = await UsersModel.update({
            no_ktp, nama_depan, nama_belakang, email, jenis_kelamin, password: encryptPassword, poto
        }, { where: { password: userData.password} })
        res.status(200).json({
            users: {updated: users[0] },
            metadata: "test update user end point success"
         })
    }else{
        res.status(400).json({
            error: "Password gagal cuy!"
         })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
      const check = await passwordCheck(email, password)
      if (check.compare === true) {
        res.status(200).json({
          users: check.userData,
          metadata: "login successs"
        })
      }
    } catch (e) {
      res.status(400).json({
        error: "data invalid"
      })
    }
})

module.exports = router