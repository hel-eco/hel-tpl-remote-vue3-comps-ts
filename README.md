# hel-tpl-remote-vue3-comps-ts
A simple remote vue3 comp template(typescript、dev with vite or webpack, build with webpack )

## desc
- vite 开发
```bash
npm run start:vite
```

- webpack 开发
```bash
npm run start
```

- 打包与发布

**先修改版本号**，在执行打包与发布命令
```
npm run build
npm run publish
```
> 构建是基于webpack构建

## how to make project skeleton

```bash
npm i @vue/cli -g

vue create hel-tpl-remote-vue3-comps-ts --packageManager=npm

cd hel-tpl-remote-vue3-comps-ts

// https://github.com/IndexXuan/vue-cli-plugin-vite
vue add vite
```

