import { cryptoModel } from "../models/crypto_model"

export const postCryptoData = async (req, res) => {
    try {
        const newCrypto = cryptoModel({
            crypto_name: req.body.crypto_name,
            crypto_symbol: req.body.crypto_symbol,
            current_price: req.body.current_price
        })
        const data = await newCrypto.save()
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(400).send('Data save Error')
        }

    } catch (error) {
        throw error
    }
}

export const getCryptoData = async (req, res) => {
    try {
        let cryptoList = await cryptoModel.find()
        return res.status(201).send(cryptoList)
    } catch (err) {
        return res.status(500).send({ 'message': `Get Error ${err}` })
    }
}

export const deleteCryptoData = async (req, res) => {
    cryptoModel.findByIdAndRemove(req.params.id).then(cryptoData => {
        if (cryptoData) {
            return res.status(200).json({ success: true, message: 'The category is deleted',data:cryptoData })
        } else {
            return res.status(404).json({ success: false, message: 'Category NOT found' })
        }
    }).catch(err => {
        return res.status(500).json({ success: false, message: err })
    })
}