const Form = require("../models/form");

async function handleForm(req, res) {
  const {
    Name,
    loc,
    state,
    hedaerTitle,
    googleLocation,
    overview,
    overviewList_1,
    overviewList_2,
    overviewList_3,
    overviewList_4,
    overviewList_5,
    established,
    campus,
    type,
    motto,
    president,
    director,
    affiliatedTo,
    applicationMode,
    admissionVia,
    officialWebsite,
    video_1,
    video_2,
    video_3,
    admissionParagraph,
    palcementParagraph,
    highestPackage,
    averagePackage,
    numberOfPalce,
    offers,
    medianPackage2023,
    noOfCompaniesVisited,
    content,
  } = req.body;

  // Parse tags and tableContent
  const hashtagsArray = req.body.tag
    .split(" ")
    .filter((tags) => tags.trim() !== "");

  const recruitersArray = req.body.recruiters
    .split(" ")
    .filter((recruiter) => recruiter.trim() !== "");

  const tableContentArray = req.body.tableContent
    .split(" ")
    .filter((list) => list.trim() !== "");

  // Parse uploaded files
  // const collegeImagesPaths = req.files["collegeImg"].map(
  //   (file) => `public/upload/${file.filename}`
  // );

  // Extract dynamic fields
  const dynamicFields = {};
  for (let i = 1; i <= 5; i++) {
    dynamicFields[`branchName_${i}`] = req.body[`branchName_${i}`] || "";
    dynamicFields[`branchName_${i}_eligible`] =
      req.body[`branchName_${i}_eligible`] || "";
    dynamicFields[`branchName_${i}_criteria`] =
      req.body[`branchName_${i}_criteria`] || "";
    dynamicFields[`branchName_${i}_duration`] =
      req.body[`branchName_${i}_duration`] || "";
    dynamicFields[`branchName_${i}_tuitionFees`] =
      req.body[`branchName_${i}_tuitionFees`] || "";
    dynamicFields[`branchName_${i}_exam`] =
      req.body[`branchName_${i}_exam`] || "";
    dynamicFields[`branchName_${i}_hostelFees`] =
      req.body[`branchName_${i}_hostelFees`] || "";
    dynamicFields[`branchName_${i}_oneTimeFees`] =
      req.body[`branchName_${i}_oneTimeFees`] || "";

    for (let j = 1; j <= 5; j++) {
      dynamicFields[`branchName_${i}_coursesName_${j}`] =
        req.body[`branchName_${i}_coursesName_${j}`] || "";
      dynamicFields[`branchName_${i}_coursesName_${j}_seat`] =
        req.body[`branchName_${i}_coursesName_${j}_seat`] || "";

      // GUJCET cutoff fields
      if (i === 1) {
        dynamicFields[
          `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_EWS`
        ] =
          req.body[`branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_EWS`] ||
          "";
        dynamicFields[
          `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_General`
        ] =
          req.body[
            `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_General`
          ] || "";
        dynamicFields[
          `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_SC`
        ] =
          req.body[`branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_SC`] ||
          "";
        dynamicFields[
          `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_SEBC`
        ] =
          req.body[
            `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_SEBC`
          ] || "";
        dynamicFields[
          `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_ST`
        ] =
          req.body[`branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_ST`] ||
          "";
        dynamicFields[
          `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_TFWS`
        ] =
          req.body[
            `branchName_${i}_coursesName_${j}_gujcet_cutoff_2024_TFWS`
          ] || "";
      }
    }
  }
  for (let step = 1; step <= 6; step++) {
    dynamicFields[`step_${step}`] = req.body[`step_${step}`] || "";
  }
  for (let i = 1; i <= 5; i++) {
    dynamicFields[`scholarshiplistName_${i}`] =
      req.body[`scholarshiplistName_${i}`] || "";
    dynamicFields[`scholarshiplistContent_${i}`] =
      req.body[`scholarshiplistContent_${i}`] || "";
  }
  for (let i = 1; i <= 5; i++) {
    dynamicFields[`facilitiesName_${i}`] =
      req.body[`facilitiesName_${i}`] || "";
    dynamicFields[`facilitiesContent_${i}`] =
      req.body[`facilitiesContent_${i}`] || "";
  }

  // Create the document
  await Form.create({
    Name,
    loc,
    state,
    tag: hashtagsArray,
    // titelImg: `public/upload/${req.files.titelImg[0].filename}`,
    // collegeImg: collegeImagesPaths,
    hedaerTitle,
    // brouchFile: `public/upload/${req.files.brouchFile[0].filename}`,
    googleLocation,
    overview,
    overviewList_1,
    overviewList_2,
    overviewList_3,
    overviewList_4,
    overviewList_5,
    established,
    campus,
    type,
    motto,
    president,
    director,
    affiliatedTo,
    applicationMode,
    admissionVia,
    officialWebsite,
    video_1,
    video_2,
    video_3,
    admissionParagraph,
    palcementParagraph,
    highestPackage,
    averagePackage,
    numberOfPalce,
    offers,
    recruiters: recruitersArray,
    medianPackage2023,
    noOfCompaniesVisited,
    content,
    tableContent: tableContentArray,
    ...dynamicFields, // Spread dynamic fields into the document
  });

  return res.redirect("/");
}

module.exports = {
  handleForm,
};
