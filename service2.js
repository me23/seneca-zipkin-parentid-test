const Seneca = require('seneca');

const seneca = new Seneca({tag: 'Service2'})
.use('seneca-zipkin-tracer', {host: 'localhost', port:9411, sampling:1})
.client({
	port:3012,
	pin: 'c:1',
	type: 'http'
})
.listen({
	port: 3011,
	pin: 'b:1',
	type: 'http'
});

seneca.add('b:1', (request, response)=>{
	console.log(request);
	seneca.act('c:1', (err, res)=>{
		response(null, {b: 1, c: res.c});
	});
	
})
