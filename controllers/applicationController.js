const Application = require("../models/Application");

// Get all applications/jobs/internships
const getApplications = async(req, res) => {
    try {
        const applications = await Application.find().sort({
            createdAt: -1,
        });

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch applications",
            error: error.message,
        });
    }
};

// Get one application
const getApplication = async(req, res) => {
    try {
        const application = await Application.findById(req.params.id);

        if (!application) {
            return res.status(404).json({
                message: "Application not found",
            });
        }

        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch application",
            error: error.message,
        });
    }
};

// Create new job/internship
const createApplication = async(req, res) => {
    try {
        const application = await Application.create({
            ...req.body,
            status: "Available",
            isApplied: false,
            applicationDate: null,
        });

        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create opportunity",
            error: error.message,
        });
    }
};

// Apply for job/internship
const applyApplication = async(req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(
            req.params.id, {
                status: "Applied",
                isApplied: true,
                applicationDate: new Date(),
            }, {
                new: true,
            }
        );

        if (!application) {
            return res.status(404).json({
                message: "Job or internship not found",
            });
        }

        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({
            message: "Failed to apply",
            error: error.message,
        });
    }
};

// Update application
const updateApplication = async(req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true,
                runValidators: true,
            }
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found",
            });
        }

        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update application",
            error: error.message,
        });
    }
};

// Delete job/internship/application
const deleteApplication = async(req, res) => {
    try {
        const application = await Application.findByIdAndDelete(
            req.params.id
        );

        if (!application) {
            return res.status(404).json({
                message: "Job or internship not found",
            });
        }

        res.status(200).json({
            message: "Deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete",
            error: error.message,
        });
    }
};

module.exports = {
    getApplications,
    getApplication,
    createApplication,
    applyApplication,
    updateApplication,
    deleteApplication,
};