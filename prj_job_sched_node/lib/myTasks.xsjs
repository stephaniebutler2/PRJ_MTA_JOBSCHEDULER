/*eslint no-console: 0, no-unused-vars: 0, quotes: 0 */
function create() {
	var connection = $.hdb.getConnection();
	var ts = new Date().toISOString();
	var myProcedure = connection.loadProcedure("PRJDBJOB", "materialize_scarr");
	myProcedure();
	connection.commit();
	connection.close();
	
    console.log("myTasks.xsjs:create: ", ts); 
}