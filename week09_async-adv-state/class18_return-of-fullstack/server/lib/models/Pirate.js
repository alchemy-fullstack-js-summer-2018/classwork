const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    name: RequiredString,
    role: {
        ...RequiredString,
        enum: ['captain', 'crew', 'navigator', 'first sword', 'cook']
    },
    crew: {
        type: Schema.Types.ObjectId,
        ref: 'Crew'
    },
    joined: {
        type: Date,
        required: true,
        default: Date.now
    },
    wardrobe: {
        hat: String,
        top: String,
        bottom: String,
        shoes: RequiredString
    },
    bounty: {
        type: Number,
        min: 0
    },
    weapons: [{
        type: RequiredString,
        damage: {
            type: Number,
            required: true,
            max: 30,
            min: 1,
        }
    }]
});

schema.statics = {
    getDetailById(id) {
        return this.findById(id)
            .lean()
            .populate({
                path: 'crew',
                select: 'name'
            });
    },
    getByQuery(query) {
        return this.find(query)
            .lean()
            .select('name crew role')
            .populate({
                path: 'crew',
                select: 'name'
            });
    },
    addWeapon(id, body) {
        return this.updateById(id, {
            $push: { weapons: body }
        })
            .then(pirate => {
                if(!pirate) return null;
                return pirate.weapons[pirate.weapons.length - 1];
            });
    },
    updateWeapon(id, weaponId, body) {

        return this.updateOne({
            '_id': id, 'weapons._id': weaponId
        }, {
            $set: {
                'weapons.$': body
            }
        })
            .then(pirate => {
                if(!pirate) return null;
                return pirate.weapons.find(w => w._id == weaponId);
            });
    },
    removeWeapon(id, weaponId) {
        return this.updateById(id, {
            $pull: { 
                weapons: { _id: weaponId }
            }
        });
    }
};

module.exports = mongoose.model('Pirate', schema);