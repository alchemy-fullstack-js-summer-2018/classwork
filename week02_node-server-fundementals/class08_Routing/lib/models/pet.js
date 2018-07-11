const client = require('../db-client');

module.exports = {
    select(id) {
        return id ? this.selectOne(id) : this.selectAll();
    },
    selectAll() {
        return client.query('SELECT * FROM PETS')
            .then(({ rows }) => rows);
    },
    selectOne(id) {
        return client.query(`
            SELECT * 
            FROM PETS
            WHERE id = $1;
        `,
        [id]
        ).then(({ rows }) => rows[0]);
    },
    insert(pet) {
        return client.query(`
            INSERT INTO PETS (
                name, color, category_id, description
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `,
        [pet.name, pet.color, pet.category_id, pet.description]
        ).then(({ rows }) => rows[0]);
    },
    update(pet) {
        return client.query(`
            UPDATE PETS 
            SET    
                name = $1, 
                color = $2, 
                category_id = $3, 
                description = $4
            WHERE id = $5
            RETURNING *;
        `,
        [pet.name, pet.color, pet.category_id, pet.description, pet.id]
        ).then(({ rows }) => rows[0]);       
    },
    delete(id) {
        return client.query(`
            DELETE FROM PETS
            WHERE id = $1;
        `,
        [id]
        ).then(() => null);       
    }
};