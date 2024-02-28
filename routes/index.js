var express = require('express');
var router = express.Router();
const userModel=require("./users");

/*
router.get("/",function (req,res){
  req.session.hehe=true;
  res.render("index")
})
router.get("/checkban",function(req,res){
  if(req.session.hehe === true){
    res.send(" you are not banned")

  }
  else{
    res.send(" you are  banned ")
  }
 
 
})

router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
   if (err) throw err;
    res.send("hehe removed");

  })
 
})
*/


router.get("/",function (req,res){
  res.cookie("age",23);
  res.render("index");

})
          router.get("/read",function(req,res){
    console.log(req.cookies.age)
     res.send("check")
          })

          router.get("/deletec",function(req,res){
            res.clearCookie("age")
            res.send("clear bhayo");
          })


router.get("/create", async function(req,res){
  const craetedUser=await  userModel.create({
  username:"Anurag",
  name:"Anurag",
  ag:23,
  });
  res.send(craetedUser);
})

router.get("/find", async function(req,res){
   const allUser=await userModel.find();
   res.send(allUser);
  })

  router.get("/singleuser",async function(req,res){
    let singleUser=await userModel.findOne({username:"Cole Palmer"})
    console.log(singleUser)
    res.send(singleUser);
  })


  //delteko lagi aba 

  router.get("/delete",async function(req,res){
    let deleteUser=await userModel.findOneAndDelete({
      username:"Anurag"
    });
    res.send(deleteUser);
  })



module.exports = router;
