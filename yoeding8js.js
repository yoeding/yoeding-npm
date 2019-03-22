var user = {
	name:"zzx"
}
function sayInfo(age){
	console.log("name:"+this.name)
    console.log("age:"+age)
}
Function.prototype.	$call = function(target){

	var args = []
	target.fn = this;
	for(var i=1;i<arguments.length;i++){
		args.push(arguments[i])
	}
	target.fn(args.join(','));
	delete target.fn
}
sayInfo.$call(user,100)