function checkAuth(req, res, next){
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization
        } catch (error) {
            
        }
    }

    next();
}

export default checkAuth;