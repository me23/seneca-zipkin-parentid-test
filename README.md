Test for seneca-zipkin-tracer

To run the test, ensure you have zipkin listen on localhost,
then run

```
npm install
```

then call one after another:

```
node service1
node service2
node service3
```

After all services listen, run

```
node client
```

On each service i log the request-params to the console and there are
all parentId's from __tracer__ empty.
In Zipkin you will see 3 individual spans, but i expected one 
with 3 sub-spans.