const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
    {
        doctor: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Appointment = mongoose.model('Appointment',appointmentSchema);
module.exports = Appointment;