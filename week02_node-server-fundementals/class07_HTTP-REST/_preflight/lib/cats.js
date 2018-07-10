
const cats = {
    garfield: {
        name: 'garfield',
        type: 'orange tabby'
    },
    marie: {
        name: 'marie',
        type: 'artistocat'
    },
    duchess: {
        name: 'duchess',
        type: 'artistocat'
    },
    felix: {
        name: 'felix',
        type: 'tuxedo'
    }
};

module.exports = (cat) => {
    if(!cat) return Object.values(cats);
    return cats[cat] || null;
};
