import jwt from "jsonwebtoken";



//Completar la funcion para generar un token JWT en base al usuario que ha iniciado sesion
export const generateJWT = (user) => {
    const userObj = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };
    const token = jwt.sign(userObj, process.env.SECRET_KEY, {algorithm: "HS256", expiresIn: "1h"});
    return token;
}

//Validar el token 
export const validateJWT = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    const token = headerToken.split(" ")[1];
    if(token){
        try {
            const verify = jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch (error) {
            res.json({message: "la validacion no es correcta"})
        } 
    }else {
        res.json({message: "La validación es incorrecta"});
    }
}