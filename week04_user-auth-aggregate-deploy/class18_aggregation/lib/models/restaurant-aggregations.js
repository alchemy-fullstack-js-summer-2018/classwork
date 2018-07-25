
module.exports = {
    averagesAllBoroughs() {
        return pipeline;
    },
    averagesOneBorough(name) {
        const onePipeline = pipeline.slice();
        onePipeline.unshift(matchBorough(name));
        console.log(onePipeline);
        return onePipeline;
    }
};

const matchBorough = borough => ({
    $match: { borough }
});

const unwindGrades = {
    $unwind: '$grades'
};

const groupByBorough = {
    $group: {
        _id: '$borough',
        name: { $first: '$name' },
        average: { $avg: '$grades.score' },
        count: { $sum: 1 },
        min: { $min: '$grades.score' },
        max: { $max: '$grades.score' }, 
    }
};

const moreThanOneGrade = {
    $match: { count: { $gt: 1 } }
};

const sortByCount = {
    $sort: { count: -1 }
};

const pipeline = [
    unwindGrades,
    groupByBorough,
    moreThanOneGrade,
    sortByCount 
];