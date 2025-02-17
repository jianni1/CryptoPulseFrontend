# Crypto Pulse Frontend

基于Uniapp、uview-ui的AI新闻平台 更新时间：2025-02-13

## 项目结构

```bash
    ├── node_modules
    ├── public
    ├── src
        ├── App.vue
        ├── main.js
        ├── manifest.json
        ├── pages.json
        ├── uni.promisify.adaptor.js
        ├── uni.scss
        └── pages
        └── static
    ├── .gitignore
    ├── babel.config.js
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── shims-uni.d.ts
    ├── shims-vue.d.ts
    └── yarn.lock
```

## 项目运行环境

- node version: v14.20.0
- yarn version: 1.22.22

## 项目初始化

```
yarn install
```

## 项目运行

```
yarn serve
```

## H5打包

```
yarn build
```

- 结果：dist/build/h5

## app调试

```
yarn build:app-plus
```

- 结果：dist/build/app-plus
- 打开 HBuilderX, 导入 dist/build/app-plus 运行

## 更多项目配置

查看 [Configuration Reference](https://cli.vuejs.org/config/).
