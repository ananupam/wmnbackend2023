const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
        },
        speciality: {
            type: String,
            required: true,
        },
        experience: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor;