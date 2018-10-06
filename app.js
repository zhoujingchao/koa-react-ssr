import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';
import views from 'koa-views';
import Static from 'koa-static';
import ip from 'ip';
import path from 'path';

import webpack from 'webpack';
import webpackConfig from './webpack.config';
import koaWebpack from 'koa-webpack';

import index from './routes'
// import Home from './client/components/home';

const app = new Koa();
const port = 3000;
const host = ip.address();

// dev 模式热加载
app.use(koaWebpack({
  compiler: webpack(webpackConfig),
  hot: {
    log: () => {}
  },
  dev: {
    noInfo: true,
    serverSideRender: true,
    hot: true,
    logLevel: 'error',
    stats: {
      colors : true
    },
    publicPath: ''
  },
}));

// dist文件夹设置为静态路径
app.use(Static(__dirname + '/dist'));

app.use(views(path.resolve(__dirname, './views'), 
  { map: { html: 'ejs' } }
));

// 配置路由
app.use(index.routes(), index.allowedMethods())

// app.use(async (ctx) => {
//   let str = renderToString(<Home />);
//   await ctx.render('index', {
//     root: str
//   });
//   // ctx.body = str;
// });

app.listen(port, host, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://%s:%s/ in your browser.', port, host, port);
  }
});
