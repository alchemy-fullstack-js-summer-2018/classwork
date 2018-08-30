const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');
const Pirate = require('./Pirate');

const schema = new Schema({
    name: RequiredString,
    flag: String,
    owner: {
        type: Schema.Types.ObjectId,
        // required: true,
        ref: 'User'
    },
    ships: [{
        type: Schema.Types.ObjectId,
        ref: 'Ship'
    }]
});

schema.statics = {
    getDetailById(id) {
        return Promise.all([
            this.findById(id)
                .populate({
                    path: 'ships',
                    select: 'name'
                })
                .lean(),
            
            Pirate.find({ crew: id })
                .lean()
                .select('name')
        ])
            .then(([crew, pirates]) => {
                if(!crew) return null;
                crew.pirates = pirates;
                return crew;
            });
    },
    findByQuery(query) {
        return this.find(query)
            .lean()
            .select('name');
    },
    removeById(id, userId) {
        return Pirate.exists({ crew: id })
            .then(exists => {
                if(exists) throw {
                    status: 400,
                    error: 'Cannot delete crew with pirates'
                };
                
                return this.findOneAndRemove({
                    _id: id,
                    owner: userId
                });
            });
    }
};

module.exports = mongoose.model('Crew', schema);