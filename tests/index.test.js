import asyncTask from '../index.js';
const middleWares = [];

middleWares.push(async function (context, next) {
  console.log('task-1');
  context.count++;
  await next();
});

middleWares.push(async function (context, next) {
  console.log('task-2');
  context.count++;
  await next();
});

middleWares.push(async function (context, next) {
  console.log('task-3');
  context.count++;
  await next();
});

const context = {
  count: 0,
};

asyncTask(middleWares, context).then(() => {
  console.log('finished', context.count);
});
