module.exports = {

    // routing

  getHomePage: (req, res) => {
    res.render('index.ejs');
},

getLogin: (req, res) => {
  res.render('login.ejs');
},

getCreateFromVoucher: (req, res) => {
  res.render('createFromVoucher.ejs');
},

getCreateFromScratch: (req, res) => {
  res.render('createFromScratch.ejs');
},
getJoin: (req, res) => {
  res.render('join.ejs');
},
getUserAcc: (req, res) => {
  res.render('userAcc.ejs');
},

};
