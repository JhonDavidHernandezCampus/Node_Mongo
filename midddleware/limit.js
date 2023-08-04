import rateLimit from 'express-rate-limit';

let configGET = ()=>{
    return rateLimit({
        windowMs:30 * 1000,
        max:5,
        standardHeaders:true,
        legacyHeaders:false,
        skip:(req,res)=>{
            if(req.headers["content-length"] > 91){
                res.status(413).send({
                    status:413,
                    message: "El tamaño del body es incorrecto"
                })
            }
        }
    });
}

export default configGET; 