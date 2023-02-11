const express = require('express')
const { response, request } = require('express');
const axios = require('axios');
const http = require('https')

const hostname = '127.0.01'
const port = 9000;



// getPosts (() => {
//   console.log('Wait for 2 second...')
//   axios.get(
//     `https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams`)
//       .then(response => {
//         const { id, title } = response.data
//         console.log(`Post ${id}: ${title}\n`)
//       })
//       .catch(error => console.log(
//         'Error to fetch data\n'))
// });
module.exports = {
  getPosts: ( (request, response) => {
    console.log('Wait for 2 second...')
    http
    .get('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams', resp => {
      let data = ''
        resp.on('data', chunk => {
            data += chunk
        })
        resp.on('end', () => {
            let peopleData = JSON.parse(data)
            const server = http.createServer((req, res) => {
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.setHeader('Access-Controll-Allow-Origin', '*')
              res.end(JSON.stringify(peopleData.people))
            })
            console.log(peopleData)
            response.json(peopleData)
        })
    })
  }),
}