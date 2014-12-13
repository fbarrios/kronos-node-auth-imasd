
var jwt = require('jsonwebtoken');

var usuarios = new Array();
usuarios.push('igaray');
usuarios.push('fbarrios');
usuarios.push('jvalentin');

TokenController = function() {
	
}

TokenController.prototype.autenticar = function(req, res) {
	
	var token = jwt.sign(req.body, 'PRIVATE_KEY');
		
	console.log(token);
	
	res.json({
		id: token,
		username: req.body.username
	});
}


TokenController.prototype.validar = function(req, res) {
	
	jwt.verify(req.params.id, 'PRIVATE_KEY', function(err, decoded) {
		if(err) {
			res.status(401).json({ message: 'Token inválido' });
			return;
		}
		
		if(usuarios.indexOf(decoded.username) == -1) {
			res.status(401).json({ message: 'Usuario inválido' });
			return;
		}		
		
		res.json({
			id: req.params.id,
			username: decoded.username
		});
		
		console.log("decoded: " + decoded);
		console.log("err: " + err);
	});
	
	
}
		

module.exports = new TokenController();
