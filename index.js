const express = require("express");
const userRoutes = require("./routes/user");
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const app = express();

// middleware
app.use(express.json());

// define all our routes
app.use("/", userRoutes);
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Users API dengan Swagger by Rino",
            version: "0.1.0",
            description:
                "Dokumentasi API untuk laravel Lumen",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            }
        },
        servers: [
            {
                url: "http://localhost:8000/",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

const port = 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/api-docs/#/`);
});