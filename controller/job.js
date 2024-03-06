const jobModal = require("../models/job.js");
const JobModal=require("../models/job.js")

const createjob= async(req,res)=>{
    try{
        console.log(req.body);
        // TODO : Insert the data into db for new job db.jobs.insertOne({...})
     const newJob=new JobModal(req.body)
    const newlyinsertedjob=   await newJob.save();
    console.log(newlyinsertedjob);
        // console.log("nipun  ",newdata);
    
        res.json({
            Sucess:true,
            Message:"Job created succesfully with id"+newlyinsertedjob._id
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
    
}

const getjob=async(req,res)=>{
  const joblist= await jobModal.find({})
    res.json({
        success:true, 
        message:"dummy job created api",
        results:joblist
    })
}

const editjob=async (req,res)=> {
    console.log(req.body);
  const updatedRecord= await jobModal.updateOne({_id:req.body._id},{$set: req.body});
    res.json({
        success:true,
        message:'Job Edited Successfully',
    })

}

const deletejob= async (req,res) =>{
    try{
      await jobModal.findByIdAndDelete(req.body._id);
        res.json({
            success:true,
            message:"job deleted successfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Something went wrong ,please try again after sometime",
        })
    }
}
module.exports={
    createjob,
    getjob,
    editjob,
    deletejob,
}