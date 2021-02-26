import sendEmail from "../utils/nodemailer";

export const Email = async (req, res) =>{
    try {
        sendEmail();
        res.json({
            message: "El correo se envió correctamente"
        })
    } catch (error) {
        console.log(error)
    }
}