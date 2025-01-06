// const DynamicModel = require("../models/courses");

// const createDynamicObject = async (req, res) => {
//   try {
//     const dynamicObject = new DynamicModel(req.body);
//     await dynamicObject.save();
//     res.redirect(`/submite/${dynamicObject._id}`);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// const renderForm = (req, res) => {
//   res.render("courses");
// };

// module.exports = { createDynamicObject, renderForm };
