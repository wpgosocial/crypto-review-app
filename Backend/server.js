"use strict";

const express = require("express");
const morgan = require("morgan");

const app = express();

const {
    // getMember,
    newRegstration,
    handleSignin,
    getSiteMembers,
    postNewReviews,
    getMembersReviews,

} = require("./handlers");

app.use(morgan("tiny"));
app.use(express.json());

app.use(express.static("public"));

//&&&&&&&&&&&&&& Site endpoints &&&&&&&&&&&&&&&&&&&
// app.get("/api/member", getMember);
app.post("/api/registration", newRegstration);
app.post("/api/signin", handleSignin);
app.post("/api/reviews", postNewReviews);
app.get("/api/reviews/:coinid", getMembersReviews);
app.get("/api/members", getSiteMembers);

//&&&&&&&&&&&&&& Coin endpoints &&&&&&&&&&&&&&&&&&&
// app.get("/api/members", getSiteMembers);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

app.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "Obviously you are lost!.",
    });
})

app.listen(8000, () => console.log(`Listening on port 8000`));
