
module.exports = function(app){


  const {getHomePage,getLogin,getCreateFromVoucher,getCreateFromScratch,getJoin,getUserAcc,registerUser} = require('../controllers/createEventController.js');


// routing
app.get('/',getHomePage);

app.get('/login',getLogin);
app.post('/login',registerUser);
app.get('/createFromVoucher',getCreateFromVoucher);
app.get('/createFromScratch',getCreateFromScratch);
app.get('/join',getJoin);
app.get('/userAcc',getUserAcc);
}
