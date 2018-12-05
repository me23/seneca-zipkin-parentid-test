const Seneca = require('seneca');
const seneca = Seneca({tag: 'client'});

seneca
.use('seneca-zipkin-tracer', {host: '192.168.101.11', port:9411, sampling: 1, parentId:'client'})
.client({
	port: 3010,
	pin: 'a:1',
	type: 'http'
});

seneca.act('a:1', (err, res)=>{
	console.log(res);
})