import polycrc from 'polycrc'

export default function emv(req, res) {

    const crc16 = polycrc.crc(16, 0x1021, 0xFFFF, 0x0000, false);
    const result = crc16( req.body.payload )

    res.status(200).json( { data: result.toString(16).toUpperCase() } )

}
