module.exports = {

    // routing

  getHomePage: (req, res) => {
    res.render('index.ejs');
},

  registerUser: (req,res) =>{

      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let gender = req.body.gender;
      let email = req.body.email;
      let location = req.body.location;
      let phone_number = req.body.phone_number;
      let rating = '2';//harcode test

      //let uploadedFile = req.files.image;
      //let image_name = uploadedFile.name;
      //let fileExtension = uploadedFile.mimetype.split('/')[1];
      //image_name = username + '.' + fileExtension;
      let query = "INSERT INTO `users` (first_name, last_name, gender, email, location, phone_num) VALUES ('" +
                            first_name + "', '" + last_name + "', '" + gender + "', '" + email + "', '" + location + "', '" + phone_number + "')";

                            db.query(query, (err, result) => {
                                                  if (err) {
                                                      return res.status(500).send(err);
                                                  }
                                                  res.redirect('/');
                                                });


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
