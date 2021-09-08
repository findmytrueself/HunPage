import { findApi } from "../controllers/apiControllers";

const express = require("express");
const router = express.Router();

router.post("/find", findApi);

module.exports = router;
