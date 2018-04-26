# js-asynctask
js中 执行异步任务

## 安装
```js
 npm i js-asynctask --save
```

## 使用
```js
const asyncTask = require('js-asynctask');

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

```