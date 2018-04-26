/**
 * 执行异步任务
 * @param {Array<Function>} middleWares - 数组
 * @param {any} ...args - 可变参数
 */
async function runAsyncTask(middleWares, ...args) {
  if (middleWares.length === 0) return;
  const len = middleWares.length;
  let index = 0;
  async function next() {
    if (index < len) {
      const func = middleWares[index++];
      func.apply(null, [...args, next]);
    }
  };
  await next();
}

export default runAsyncTask;
