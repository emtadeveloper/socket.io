const express = require('express');
const NamespaceController = require('./../controller/Namespace');

const router = express.Router();

router.get("/", NamespaceController.getAll)
router.get("/", NamespaceController.create)

module.exports = router


