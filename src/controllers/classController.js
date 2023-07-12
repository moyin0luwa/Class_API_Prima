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
    const {subject, studentname, studentage, studentgender, teachername, teacherage, teachergender } = await req.body
    const student = await prisma.student.create({
        data: {
            name: studentname,
            age: studentage,
            gender: studentgender, 
            room_enrolled: {
                connectOrCreate: {
                    where: {
                        subject: subject,
                    }, 
                    create: {
                        subject: subject,
                        teacher: {
                            create: {
                               name: teachername,
                               age: teacherage,
                               gender: teachergender   
                            }
                        }
                    }
                }
            }
        }
    })
    console.log(student)
        return res.status(200).json({
            success: true,
            message: "Student enrolled successfully",
            student: student
        })
}


module.exports = {
    createClass,
    enrollStudent
}