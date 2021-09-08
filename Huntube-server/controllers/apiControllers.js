module.exports = {
  findApi: (req, res) => {
    console.log(req.body);
    res.send("ok");
  },
};
