const v4 = require("uuid")
const uuid = v4.v4
let db = {
    advices:[
        {
            id:uuid(),
            author:"Unknown",
            advice:"Do what your heart tells you"
        },
        {
            id:uuid(),
            author:"Unknown",
            advice:"Think before do"
        }
    ]
    }

module.exports = {db}