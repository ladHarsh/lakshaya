const mongoose = require("mongoose");

const dynamicFields = {};
for (let i = 1; i <= 5; i++) {
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

  for (let j = 1; j <= 5; j++) {
    dynamicFields[`branchName_${i}_coursesName_${j}`] = {
      type: String,
      required: false,
    };
    dynamicFields[`branchName_${i}_coursesName_${j}_seat`] = {
      type: String,
      required: false,
    };
    if (i === 1) {
      dynamicFields[`branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_EWS`] =
        {
          type: String,
          required: false,
        };

      dynamicFields[
        `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_General`
      ] = {
        type: String,
        required: false,
      };

      dynamicFields[`branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_SC`] =
        {
          type: String,
          required: false,
        };

      dynamicFields[
        `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_SEBC`
      ] = {
        type: String,
        required: false,
      };

      dynamicFields[`branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_ST`] =
        {
          type: String,
          required: false,
        };

      dynamicFields[
        `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_TFWS`
      ] = {
        type: String,
        required: false,
      };
    }
  }
}
for (let step = 1; step <= 6; step++) {
  // Adjust the number of steps as required
  dynamicFields[`step_${step}`] = {
    type: String,
    required: false,
  };
}

// Dynamic fields for scholarships
for (let i = 1; i <= 5; i++) {
  // Adjust the number of scholarships as required
  dynamicFields[`scholarshiplistName_${i}`] = {
    type: String,
    required: false,
  };
  dynamicFields[`scholarshiplistContent_${i}`] = {
    type: String,
    required: false,
  };
}

// Dynamic fields for facilities
for (let i = 1; i <= 5; i++) {
  // Adjust the number of facilities as required
  dynamicFields[`facilitiesName_${i}`] = {
    type: String,
    required: false,
  };
  dynamicFields[`facilitiesContent_${i}`] = {
    type: String,
    required: false,
  };
}

const formSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: false,
    },
    loc: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    tag: {
      type: [String],
      required: false,
    },
    titelImg: {
      type: String,
      required: false,
    },
    collegeImg: {
      type: [String],
      required: false,
    },
    hedaerTitle: {
      type: String,
      required: false,
    },
    brouchFile: {
      type: String,
      required: false,
    },
    googleLocation: {
      type: String,
      required: false,
    },
    overview: {
      type: String,
      required: false,
    },
    overviewList_1: {
      type: String,
      required: false,
    },
    overviewList_2: {
      type: String,
      required: false,
    },
    overviewList_3: {
      type: String,
      required: false,
    },
    overviewList_4: {
      type: String,
      required: false,
    },
    overviewList_5: {
      type: String,
      required: false,
    },
    established: {
      type: String,
      required: false,
    },
    campus: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    motto: {
      type: String,
      required: false,
    },
    president: {
      type: String,
      required: false,
    },
    director: {
      type: String,
      required: false,
    },
    affiliatedTo: {
      type: String,
      required: false,
    },
    applicationMode: {
      type: String,
      required: false,
    },
    admissionVia: {
      type: String,
      required: false,
    },
    officialWebsite: {
      type: String,
      required: false,
    },
    video_1: { type: String, required: false },
    video_2: { type: String, required: false },
    video_3: { type: String, required: false },
    admissionParagraph: {
      type: String,
      required: false,
    },
    palcementParagraph: {
      type: String,
      required: false,
    },
    highestPackage: {
      type: String,
      required: false,
    },
    averagePackage: {
      type: String,
      required: false,
    },
    numberOfPalce: {
      type: String,
      required: false,
    },
    offers: {
      type: String,
      required: false,
    },
    recruiters: {
      type: [String],
      required: false,
    },
    medianPackage2023: {
      type: String,
      required: false,
    },
    noOfCompaniesVisited: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    tableContent: {
      type: [String],
      required: false,
    },
    ...dynamicFields,
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
