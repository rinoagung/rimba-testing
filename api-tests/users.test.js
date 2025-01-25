const request = require('supertest');
const app = 'http://localhost:8000';

describe('Users API', () => {


    let userId = '9e0c9155-f49f-48dd-9e45-ce5fc413db49';

    it('Menghapus user berdasarkan ID', async () => {
        const response = await request(app).delete(`/users/${userId}`);
        expect(response.status).toBe(200);
    });

    it('Buat user baru', async () => {
        const newUser = {
            id: userId,
            name: 'Rino',
            email: 'rino@gmail.com',
            age: 30,
        };

        const response = await request(app)
            .post('/users')
            .send(newUser)
            .set('Content-Type', 'application/json');


        expect(response.status).toBe(200);
        expect(response.body.data.name).toBe(newUser.name);
        expect(response.body.data.email).toBe(newUser.email);

    });

    it('Ambil semua user', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('Ambil user berdasarkan ID', async () => {

        const response = await request(app).get(`/users/${userId}`);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe(userId);
    });

    it('Update user berdasarkan ID', async () => {
        const response = await request(app)
            .put(`/users/${userId}`)
            .send({
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                age: 12
            })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body.data.name).toBe('Jane Doe');
        expect(response.body.data.email).toBe('jane.doe@example.com');
    });

});
