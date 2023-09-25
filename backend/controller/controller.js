const usermodel = require("../model/model");

const handleErrors = (error) => { 
   let errors = { email: "" };
 
   if (error.code === 11000) { 
     errors.email = "Email is already registered";
     return errors;
   }
   return errors;
 };
 
 module.exports.surveydetails = async (req, res, next) => {
   try {
     const survey = new usermodel({
       name: req.body.name,
       education: req.body.education,
       skills: req.body.skills,
       gender: req.body.gender,
       phoneNumber: req.body.phoneNumber,
       email: req.body.email,
     });
 
     await survey.save();
     console.log("Added Successfully");
     res.status(201).json({ message: "Survey details added successfully" });
   } catch (error) { 
     const errors = handleErrors(error); 
     console.error("Error:", error);
     res.json({ errors, created: false });
   }
 };

 
module.exports.table = async (req, res, next) => {
  try {
    const surveyData = await usermodel.find();
    res.json(surveyData);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching survey data" });
  }
};
