/*
 * @Author: xs
 * @Date: 2023-05-16 09:57:20
 */
/*
 * @Author: xs
 * @Date: 2023-05-16 09:57:20
 */
// 全局错误处理方法2
const globalException = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = `服务器错误${err.message}`;
  }
};

module.exports = globalException;
