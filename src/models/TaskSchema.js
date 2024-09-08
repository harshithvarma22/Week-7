const mongoose=require('mongoose');

  const taskSchema = new mongoose.Schema({
    courseId:String,
    taskName:String,
    priority:String, //(high,medium,low)
    deadline:String,
    description:String
  });
  const taskModel=new mongoose.model('taskModel', taskSchema);


  module.exports=taskModel;