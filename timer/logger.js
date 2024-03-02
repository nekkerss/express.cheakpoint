let date = new Date()

console.log(date);

const currentday = date.getDay()

const currenthour = date.getHours()


const logger = (req, res, next) => {
    if (currenthour >= 9 && currenthour < 17 && currentday >= 1 && currentday <= 5) {
        next()
    } else {
        res.send("<h1> closed for now </h1>")
    }
}


module.exports = logger 