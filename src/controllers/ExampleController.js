const mysqlConnectionImported = require('./../config/database');

module.exports = {
	async index(req, res){
        mysqlConnectionImported.query("SELECT * FROM examples", (err, result)=>{
            if(!err)
                res.json(result);
            else
                console.log(err);
        });
	},

	async show(req, res){
		mysqlConnectionImported.query("SELECT * FROM examples WHERE id = ?",[req.params.id],(err, result)=>{
            if(!err)
                res.json( result );
            else
                console.log(err);
        });
	},

	async store(req, res){
		let data = req.body;
        mysqlConnectionImported.query("INSERT INTO examples(title) VALUES (?);",[data.title],(err, result)=>{
            if(!err)
                res.json({ message : "Successfully Created" });
            else
                console.log(err);
        });
	},

	async update(req,res){
		let data = req.body;
        mysqlConnectionImported.query("UPDATE examples SET title = ? WHERE id = ?;",[data.title,req.params.id],(err, result)=>{
            if(!err)
                res.json({ message: "Successfully edited" });
            else
                console.log(err);
        })
	},

	async destroy(req, res){
		mysqlConnectionImported.query('DELETE FROM examples WHERE id = ?',[req.params.id],(err, result)=>{
            if(!err)
                res.json({ message: "Successfully deleted" });
            else
                console.log(err);
        })
	}

};