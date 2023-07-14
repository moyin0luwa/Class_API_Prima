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
        return res.status(200).json({
            success: true,
            message: "Class created successfully",
            class: lectureRoom
        })
   
}

const enrollStudent = async (req, res) => {
    const {subject, studentname, studentage, studentgender } = await req.body
    const lectureroom = await prisma.room.update({
        where: {
            subject: subject,
        },
        data: {
            student: {
                create: {
                    name: studentname,
                    age: studentage,
                    gender: studentgender
                }
            }
        }
    })
    console.log(lectureroom)
     return res.status(200).json({
        success: true,
        message: "Student enrolled successfully",
        lectureroom
    })
}

const user = await prisma.user.update({
    where: { email: 'alice@prisma.io' },
    data: {
      posts: {
       create: { title: 'Hello World' },
      },
    },
  })
module.exports = {
    createClass,
    enrollStudent
}