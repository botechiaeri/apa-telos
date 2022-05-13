//misslw;
const express = require('express')
const fs = require('fs')
const path = require('path')
	//REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDB.json')
const localsFilePath = path.join(__dirname, '../data/localsDB.json')
	//JSON OBJECT --> JS OBJECT
const comunasDB = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const localsDB = JSON.parse(fs.readFileSync(localsFilePath, 'utf-8'));

let bottomSearch= {
		#searchByFooter : req.body.searchByFooter