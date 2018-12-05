const Seneca = require('seneca');

const seneca = new Seneca({tag: 'Service3'})
.use('seneca-zipkin-tracer', {host: 'localhost', port:9411, sampling:1})
.listen({
	port: 3012,
	pin: 'c:1',
	type: 'http'
});

seneca.add('c:1', (request, response)=>{
	console.log(request);
	response(null, {c: 1});	
})
