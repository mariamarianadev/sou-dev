const express = require('express');
const categoriaRoutes = require ('./resourses/category/routes');
const app = express();

app.use(categoriaRoutes)

app.listen(8000, () => {
    console.log('--------')
    console.log('--pronto--')
    console.log('----------')

});