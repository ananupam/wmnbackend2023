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
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor;