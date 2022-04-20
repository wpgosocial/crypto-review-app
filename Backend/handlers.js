"use strict";
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/members"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const getSiteMembers = async (req, res) => {
    console.log("$$$$$______________________##########",);
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("cryptomeodb");
    try {
        const membersInfo = await db.collection("registration").find().toArray();
        res
            .status(200)
            .json({ status: 200, membersInfo, message: " Sucess *cryptomeo*" });
    } catch (error) {
        res.status(500).json({ status: 500, error: "Connection Error *cryptomeo*" });
    }
    client.close();
};
///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/registration"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const newRegstration = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("cryptomeodb");
    try {
        const regInput = req.body;
        const membersInfo = await db.collection("registration").insertOne(regInput);
        res
            .status(200)
            .json({ status: 200, data: regInput, message: " Sucess! registered on cryptomeo!" });
    }
    catch (error) {
        res
            .status(500)
            .json({ status: 500, message: "Internal server error *cryptomeo*" })
    }
    client.close();
};
///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/signin"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const handleSignin = (req, res) => {
//     const siteMember = req.body;//The name the use entered here 

//     console.log("##################### ", siteMember)
//     // const validateSiteMember = res.locals.registration.find((user) => (user.username.toLowerCase() === siteMemberUsername.toLowerCase() && user.password === siteMemberPassword)) || null;
//     const validateSiteMember = res.locals.registration.find((user) => user.username.toLowerCase() === siteMember.username.toLowerCase()) || null;


//     validateSiteMember ? sendResponse(res, 200, validateSiteMember) : sendResponse(res, 404, null, "user not found");
// };

///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/registration"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const postNewReviews = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("cryptomeodb");
    try {
        const reviewInput = req.body;
        const membersInfo = await db.collection("reviews").insertOne(reviewInput);
        res
            .status(200)
            .json({ status: 200, data: reviewInput, message: " Sucess! add a review on cryptomeo!" });
    }
    catch (error) {
        res
            .status(500)
            .json({ status: 500, message: "Internal server error *cryptomeo*" })
    }
    client.close();
};

///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/review"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const getMembersReviews = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("cryptomeodb");
    const { coinid } = req.params;
    try {
        const membersInfo = await db.collection("reviews").find().toArray();
        res
            .status(200)
            .json({ status: 200,data: membersInfo.filter((element) => element.coinid === coinid), message: " Sucess *cryptomeo*" });
    } catch (error) {
        res.status(500).json({ status: 500, error: "Connection Error *cryptomeo*" });
    }
    client.close();
};

///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/signin"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const handleSignin = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("cryptomeodb");
    try {
        const signinInput = req.body;
        // regInput["id"] = uuidv4();

        // const membersInfo = await db.collection("registration").insertOne(regInput);
        const membersInfo = await db.collection("signin").findOne({ id: signinInput._id });
        const membersInfoPass = await db.collection("signin").findOne({ id: signinInput._id });

        console.log("signinInput ************ ", signinInput)
        res
            .status(200)
            .json({ status: 200, data: signinInput, message: " Sucess! signed in to cryptomeo!" });
    }
    catch (error) {
        res
            .status(500)
            .json({ status: 500, message: "Internal server error *cryptomeo*" })
    }
    client.close();
};

///$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   "/api/members"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// const getMember = (req, res) => {

//     const activeMember = res.locals.registration.filter((user) => !user.deleted);
//     sendResponse(res, 200, activeMember);
// };



module.exports = {
    // getMember,
    newRegstration,
    handleSignin,
    getSiteMembers,
    postNewReviews,
    getMembersReviews,

};