const request = require("supertest");
const { expect } = require("chai");
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`;
const token = "d89c5d493bc8206cb84ca84661f0b7c2d1190148fc94fc8f577a0d62e6c746ce"; 

let userId; 

describe("Testing API restful", function () {
    it("Test Success POST", async function () {
        const userData = {
            "name": "Alifio Fathan Haryanto",
            "email": "alhaepw.f@gmail.com",
            "gender": "male",
            "status": "inactive"
        };

        const response = await request(url)
            .post("")
            .set('Authorization', `Bearer ${token}`) 
            .send(userData); 

        expect(response.status).to.equal(201);
        console.log(response.body);

        userId = response.body.id;
        console.log(userId);
    });
});

describe("Testing API restful", function () {
    it("Test Failed POST", async function () {
        const userData = {
            "name": "Alifio Fathan Haryanto",
            "email": "",
            "gender": "male",
            "status": "inactive"
        };

        const response = await request(url)
            .post("")
            .set('Authorization', `Bearer ${token}`) 
            .send(userData); 

        const errorMessage = response.body.find(error => error.message === "can't be blank");
        expect(errorMessage).to.exist; 
        console.log(response.body);
    });
});


describe("Testing API restful", function () {
    it("Test Success GET", async function () {
        const response = await request(url)
            .get(`/${userId}`)
            .set('Authorization', `Bearer ${token}`) 

        expect(response.status).to.equal(200);
        console.log(response);
    });
});

describe("Testing API restful", function () {
    it("Test Failed GET", async function () {
        const response = await request(url)
            .get(`/00`)
            .set('Authorization', `Bearer ${token}`) 

        expect(response.status).to.equal(404);
        console.log(response);
    });
});

describe("Testing API restful", function () {
    it("Test Success PUT", async function () {
        const userData = {
            "name": "Alooo Fathan Haryanto",
            "email": "aliefieieo.oowoooo@gmail.com",
            "gender": "male",
            "status": "inactive"
        };

        const response = await request(url)
            .put(`/${userId}`)
            .set('Authorization', `Bearer ${token}`) 
            .send(userData); 

        expect(response.status).to.equal(200);
        console.log(response.body);

        userId = response.body.id;
        console.log(userId);
    });
});

describe("Testing API restful", function () {
    it("Test Failed PUT", async function () {
        const userData = {
            "name": "Alooo Fathan Haryanto",
            "email": "aliio.fuwoooo@gmail.com",
            "gender": "",
            "status": "inactive"
        };

        const response = await request(url)
            .put(`/${userId}`)
            .set('Authorization', `Bearer ${token}`) 
            .send(userData); 

        expect(response.status).to.equal(422);
        console.log(response.body);

        // userId = response.body.id;
        // console.log(userId);
    });
});

describe("Testing API restful ", function () {
    it("Test Failed DELETE", async function () {
        const response = await request(url)
            .delete('/0')
            .set('Authorization', `Bearer ${token}`)  

        expect(response.body.message).to.equal(
            "Resource not found"
        );
        console.log(response.body);
    });
});

describe("Testing API restful ", function () {
    it("Test Success DELETE", async function () {
        const response = await request(url)
            .delete(`/${userId}`)
            .set('Authorization', `Bearer ${token}`)  

        expect(response.status).to.equal(204);
        console.log(response.body);
    });
});