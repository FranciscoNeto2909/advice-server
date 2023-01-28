const v4 = require("uuid")
const uuid = v4.v4
let db = {
    suggestedAdvice:[
        
    ],
    advices:[
        {
            id:uuid(),
            title:"Some advice",
            advice:"Do what your heart tells you"
        },
        {
            id:uuid(),
            title:"Some other advice",
            advice:"Think before do"
        }
    ]
    }

module.exports = {db}