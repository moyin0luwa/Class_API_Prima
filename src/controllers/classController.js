const prisma = require('../../prisma/index')

// steps create class with teahcer included
// create student and connect to class

const createClass = async (req, res) => {
        const {subject, teachername, teacherage, teachergender} = await req.body
        const lectureRoom = await prisma.class.create({
            data:{
                subject : subject, 
                teacher: {
                    create: {
                        teachername,
                        teacherage,
                        teachergender
                    }
                }
            }
        })
        return res.status(200).json({
            success: true,
            message: "Product added successfully",
            class: lectureRoom
        })
   
}


module.exports = {
    createClass,
}