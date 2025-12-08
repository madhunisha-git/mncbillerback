const express = require('express');
const router = express.Router();
const {
  getCompanyDetails,
  createCompany,
  updateCompany,
  getAllCompanies
} = require('../Controller/Company.controller');

router.get('/company', getCompanyDetails);     // Load form
router.get('/companies', getAllCompanies);
router.post('/company', createCompany);        // Add new
router.put('/company', updateCompany);         // Edit latest

module.exports = router;