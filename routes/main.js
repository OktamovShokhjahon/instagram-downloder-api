// packages
const { Router } = require('express')

// helpers
const getData = require('../helpers/getData')

// router
const router = Router()

// test
router.get('/download', (req, res) => {
    const { url } = req.query

    if (url) {
        const link = `https://instagram-videos.vercel.app/api/video?postUrl=${url}`
        getData(link)
            .then((data) => {
                res.send({
                    ok: true,
                    response: data
                })
            })
            .catch((err) => {
                res.send({
                    ok: false,
                    response: err
                })
            })
    } else {
        res.send({
            ok: false,
            response: 'Link not provided'
        })
    }
})

// export
module.exports = router