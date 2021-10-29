const redis = require('redis');
const keys = require('./keys');

const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});

const redisSubscriber = client.duplicate();

function getFib(index) {
  if (index < 0) {
    return -1;
  }

  if (index === 0 || index === 1) {
    return index;
  }

  return getFib(index - 1) + getFib(index - 2);
}

redisSubscriber.subscribe('insert');

redisSubscriber.on('message', (channel, key) => {
  console.log(key);
  client.hset('values', key, getFib(+key));
});
