const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Book } = require('../models/Book');

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/') // uploads라는 폴더 생성하고 저장
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`) // ex) 1220001309139_hello
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).array("images"); // 파일 하나만

router.post('/uploadImage', (req, res) => {
    return res.status(200).send("Image Upload Success");
});

router.post('/uploadBook', (req, res) => {
    //이미지를 서버에 저장
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        req.body.methods = JSON.parse(req.body.methods)
        req.body.images = []
        res.req.files.map(img => {
            req.body.images.push(img.path)
        });

        const book = new Book(req.body);

        book.save(err => {
            if (err) return res.status(400).json({ success: false });
            return res.status(200).json({ success: true });
        })
    })
});

router.get('/getBooks', (req, res) => {
    Book.find()
        .populate('seller')
        .limit(8)
        .exec((err, books) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, books});
        })
})



module.exports = router;
