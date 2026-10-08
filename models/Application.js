const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true,
    },

    position: {
        type: String,
        required: true,
        trim: true,
    },

    type: {
        type: String,
        enum: ["Job", "Internship"],
        required: true,
    },

    location: {
        type: String,
        default: "Remote",
    },

    status: {
        type: String,
        enum: [
            "Available",
            "Applied",
            "Interview",
            "Shortlisted",
            "Rejected",
            "Selected",
        ],
        default: "Available",
    },

    applicationDate: {
        type: Date,
        default: null,
    },

    jobUrl: {
        type: String,
        default: "",
    },

    notes: {
        type: String,
        default: "",
    },

    isApplied: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Application", applicationSchema);