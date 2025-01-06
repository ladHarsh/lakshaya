const mongoose = require("mongoose");

const dynamicFields = { name: { type: String, required: false } };

for (let i = 1; i <= 7; i++) {
  dynamicFields[`branchName_${i}`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_eligible`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_criteria`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_duration`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_tuitionFees`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_exam`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_hostelFees`] = {
    type: String,
    required: false,
  };

  dynamicFields[`branchName_${i}_oneTimeFees`] = {
    type: String,
    required: false,
  };

  for (let j = 1; j <= 7; j++) {
    dynamicFields[`branchName_${i}_coursesName_${j}`] = {
      type: String,
      required: false,
    };

    dynamicFields[`branchName_${i}_coursesName_${j}_seat`] = {
      type: String,
      required: false,
    };
  }
}

const dynamicSchema = new mongoose.Schema(dynamicFields);
const DynamicModel = mongoose.model("DynamicModel", dynamicSchema);

module.exports = DynamicModel;
