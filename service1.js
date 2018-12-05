const Seneca = require('seneca');

const seneca = new Seneca({tag: 'Service1'})
.use('seneca-zipkin-tracer', {host: 'localhost', port:9411, sampling:1})
.client({
	port: 3011,
	pin: 'b:1',
	type: 'http'
})
.listen({
	port: 3010,
	pin: 'a:1',
	type: 'http'
});

seneca.add('a:1', (request, response)=>{
	console.log( request );
	seneca.act('b:1', (err, res)=>{
		response(null, {a: 1, b: res});
	})
	
})
