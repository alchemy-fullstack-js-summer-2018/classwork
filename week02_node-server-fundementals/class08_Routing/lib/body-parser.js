
module.exports = req => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            if(!body) return resolve({});

            const parsed = JSON.parse(body);
            resolve(parsed);
        });

        req.on('error', reject);
    });
};