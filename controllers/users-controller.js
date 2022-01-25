module.exports = {
    getUsers:(req,res)=>{
        res.json(require('../collection/usersCullection.json'))
    }
}
