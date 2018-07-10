
module.exports = req => {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            const parsed = JSON.parse(body);
            resolve(parsed);
        });
    });
};