const mongoose=require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId:String,
    courseName: String,
    instructor:String,
    startDate: String,
    endDate: String,
    totalHours:Number,
    description: { type: String },
  });


  const courseModel=new mongoose.model('courseModel', courseSchema);
 
  module.exports=courseModel;
  