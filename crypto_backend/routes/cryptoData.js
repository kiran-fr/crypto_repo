import express from "express";
import { deleteCryptoData, getCryptoData, postCryptoData } from "../contollers/getCryptoData";

const router = express.Router()

router.post('/home', postCryptoData)
router.get('/view', getCryptoData)
router.delete('/delete/:id', deleteCryptoData)


export default router