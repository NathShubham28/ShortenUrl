const ShortUrl = require('../models/urlModel')
const shortId = require('shortid')

const createShortUrl = async (req, res) => {
    console.log()
    const urlExits = await ShortUrl.findOne({ full: req.headers.full })
    if(urlExits){
        // res.redirect('/')
        res.status(409).json({error: "Already url exists."})
    }
    else {
        const url = await ShortUrl.create({ full: req.headers.full, short: shortId.generate() })
        if(url) {
            // res.redirect('/')
            res.status(200).json({urlBody: url})
        }
        else {
            res.status(400).json({error: "Something went wrong."})
        }
    }
};

const getAllUrl = async (req, res) => {
    console.log("Coming")
    const shortUrls = await ShortUrl.find()
    console.log("res" + shortUrls)
    // res.render('index', { shortUrls: shortUrls })
    res.status(200).json(shortUrls)
};

const redirectUrl = async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    console.log(shortUrl)
    if (shortUrl == null) return res.sendStatus(404)
    
    shortUrl.clicks++
    shortUrl.save()
    console.log(shortUrl)
    res.status(200).json(shortUrl)
    // res.redirect(shortUrl.full)
}

module.exports = {createShortUrl, getAllUrl, redirectUrl};