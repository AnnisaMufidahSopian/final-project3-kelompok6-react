const express = require('express')
const router = express.Router()
const HotelModel = require('../models/hotel')


// routing endpoint users utama
router.get('/', async(req, res) => {
    const hotel = await HotelModel.findAll()
    const filters = req.query;
    const filteredHotel = hotel.filter(hotel => {
    let isValid = true;
    for (key in filters) {
      console.log(key, hotel[key], filters[key]);
      isValid = isValid && hotel[key] == filters[key];
    }
    return isValid;
  });
    res.status(200).json({
        data: filteredHotel,
        metadata: "test hotel end point success"
    })
})

router.post('/', async(req, res) => {
    // nip, nama, password ->>>>>>>>>>>>>>>>> BE nangkep
    const { kode_hotel, nama_hotel, harga_hotel, alamat_hotel, kota_hotel, tentang_hotel, rating_hotel, poto_hotel } = req.body
    // meng  create data
    const hotels = await HotelModel.create({
        kode_hotel, nama_hotel, harga_hotel, alamat_hotel, kota_hotel, tentang_hotel, rating_hotel, poto_hotel
    })
    res.status(200).json({
        registered: hotels,
        metadata: "test add hotel end point success"
     })
})

router.get('/search', async(req, res) => {
  const hotel = await HotelModel.findAll()
    const filters = req.query;
    const filteredHotel = hotel.filter(hotel => {
    let isValid = true;
    for (key in filters) {
      console.log(key, hotel[key], filters[key]);
      isValid = isValid && hotel[key] == filters[key];
    }
    return isValid;
  });
    res.status(200).json({
        data: filteredHotel,
        metadata: "test hotel end point success"
    })
})

module.exports = router