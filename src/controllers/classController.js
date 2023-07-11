const { PrismaClient } = require ('@prisma/client')
const prisma = new PrismaClient()

// steps create class with teacher included
// create student and connect to class

const createClass = async (req, res) => {
        const {subject, teachername, teacherage, teachergender} = await req.body
        const lectureRoom = await prisma.room.create({
            data:{
                subject : subject, 
                teacher: {
                    create: {
                       name: teachername,
                       age: teacherage,
                       gender: teachergender  
                    }
                }
            }
        })
        console.log( lectureRoom)
        return res.status(200).json({
            success: true,
            message: "Product added successfully",
            class: lectureRoom
        })
   
}


module.exports = {
    createClass,
}