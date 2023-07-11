const fastify = require("fastify")({
    logger: true,
});

fastify.get("/", function (request, reply) {
    reply.send({hello: "world"});
});

let count = 0;

fastify.post("/", function (request, reply) {
    count += 1;
    if (count % 1000 == 0) {
        console.log(count);
    }

    reply.send({success: "world"});
});

const port = process.env.PORT || 3000
fastify.listen({port: port}, "0.0.0.0", function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});