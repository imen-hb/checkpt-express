const checkDate =(req,res,next) =>{
    const today = new Date()
    const dayOfweak = today.getDay()
    const hour = today.getHours() 

    if(dayOfweak >0 && dayOfweak <= 5 && hour<17){
        next()
    } else{
        res.send('sorry this web application is only available during working hours (Monday to Friday,  from 9 to 17).')
    }
}

module.exports=checkDate