const crypto = require('crypto')

const md5password = password =>{
    const md5 = crypto.createHash('md5') //return an object
    const result = md5.update(password).digest('hex')
    return result
}

