const express=require('express');
const jobController=require("../controller/job.js")

const router=express.Router();


router.post("",jobController.createjob);
router.get("",jobController.getjob);

router.patch("",jobController.editjob);
router.delete("",jobController.deletejob);



module.exports=router;