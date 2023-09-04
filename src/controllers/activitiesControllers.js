const Activity = require('../models/Activity');

const createActivity = async (req, res) => {
    try {
        const activityData = req.body;
        const newActivity = new Activity(activityData);
        const createdActivity = await newActivity.save();
        res.status(201).json(createdActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getActivityById = async (req, res) => {
    try {
        const activityId = req.params.id;
        const activity = await Activity.findById(activityId);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateActivityById = async (req, res) => {
    try {
        const activityId = req.params.id;
        const updatedData = req.body;
        const updatedActivity = await Activity.findByIdAndUpdate(
            activityId,
            { $set: updatedData },
            { new: true }
        );
        if (!updatedActivity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(updatedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteActivityById = async (req, res) => {
    try {
        const activityId = req.params.id;
        await Activity.findByIdAndDelete(activityId);
        res.status(200).json({ message: 'Activity has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createActivity,
    getActivities,
    getActivityById,
    updateActivityById,
    deleteActivityById,
};