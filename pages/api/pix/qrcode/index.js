import QRCode from "qrcode"

export default function qrcode( req, res ){

    QRCode.toDataURL(req.body.payload)
    .then(url => {
        res.status(200).json( { data: url } )
    })
    .catch(err => {
        res.status(400).json( { data: err } )
    })

}

