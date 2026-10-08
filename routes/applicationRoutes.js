const express = require("express");

const {
    getApplications,
    getApplication,
    createApplication,
    applyApplication,
    updateApplication,
    deleteApplication,
} = require("../controllers/applicationController");

const router = express.Router();

router.get("/", getApplications);

router.get("/:id", getApplication);

router.post("/", createApplication);

router.put("/:id", updateApplication);

router.put("/:id/apply", applyApplication);

router.delete("/:id", deleteApplication);

module.exports = router;