/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *           example: "9e0c9155-f49f-48dd-9e45-ce5fc413db49"
 *         name:
 *           type: string
 *           description: name user
 *           example: "Bob"
 *         email:
 *           type: string
 *           description: email user
 *           example: "bobupdate@gmail.com"
 *         age:
 *           type: integer
 *           description: age user
 *           example: 12
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Waktu user ditambahkan
 *           example: "2025-01-25T04:04:21.000000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Waktu user diupdate
 *           example: "2025-01-25T05:12:09.000000Z"
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: "Detail User!"
 *         data:
 *           $ref: '#/components/schemas/Users'
 *         status:
 *           type: integer
 *           example: 200
 * paths:
 *   /users:
 *     get:
 *       summary: Tampilkan semua Users
 *       tags: [Users]
 *       responses:
 *         200:
 *           description: Tampilkan semua Users
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Users'
 *     post:
 *       summary: Buat user baru
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       responses:
 *         200:
 *           description: Buat user baru.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ApiResponse'
 *         401:
 *           description: Isi form tidak sesuai dengan yang diminta
 *         400:
 *           description: User gagal disimpan
 *   /users/{id}:
 *     get:
 *       summary: Ambil user berdasarkan ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         200:
 *           description: Ambil user berdasarkan ID
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ApiResponse'
 *         404:
 *           description: User tidak ditemukan
 *     put:
 *       summary: Update user berdasarkan ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       responses:
 *         200:
 *           description: User berhasil diupdate
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ApiResponse'
 *         400:
 *           description: User tidak ditemukan
 *         401:
 *           description: Isi form tidak sesuai dengan yang diminta
 *     delete:
 *       summary: Hapus user berdasarkan ID
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         200:
 *           description: The user was deleted
 *         400:
 *           description: User tidak ditemukan
 */

const router = require('express').Router();


module.exports = router;
