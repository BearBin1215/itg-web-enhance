# ITG-Web-Enhance

> Enhancement script for websites of Xiamen ITG Group Corp., Ltd.

- [功能介绍](#功能介绍)
- [开发说明](#开发说明)
- [关于发布](#关于发布)
- [TODO](#todo)
- [更新日志](#更新日志)

## 开发说明

1. 使用[typescript](https://www.typescriptlang.org/)开发，开发过程中建议打开编辑器的类型检查。
2. 样式表使用[scss](https://sass-lang.com/)编写。为避免不同站点样式互串，使用形如`iwe-<sitename>-foo`的形式给类命名。
3. 对于直接修改原有内容样式的页面，使用scss编写后通过`import styles from './foo.scss' assert { type: 'string' };`的格式导入，styles会被读取为字符串，然后通过DOM操作添加到文档；如果不使用断言，webpack则会通过css-loader和style-loader将其直接加到文档。

## 关于发布

- 工具打包通过脚本生成油猴脚本头部，版本号和匹配网站会从[package.json](package.json)中读取。
- 版本的发布使用github actions进行，每当[dist/itg-web-enhance.js](dist/itg-web-enhance.js)发生变化时触发推送npm，因此需要注意每次构建时更改package.json中的版本号，否则会推送失败。

## TODO

>

## 更新日志

#### 2024-08-07 v1.1.10
- 添加对财务共享的支持：
  1. 流程列表页上方的搜索、新增栏固定；
  2. 流程分类展开高度增大。

#### 2024-03-29 v1.1.7
- 修复OA粘贴实际不生效的问题。
- 修正弹窗等样式的错误。

#### 2024-03-27 v1.1.5
- 新增对物流中台的样式优化；
- rancher和jenkins支持通过<kbd>Ctrl</kbd>+<kbd>G</kbd>快捷键聚焦到搜索框。

#### 2024-03-26 v1.1.4
- 修复rancher重复生成设置按钮的问题。

#### 2024-03-25 v1.1.1
- 新增jenkins的构建页和详情页复制镜像链接功能；
- 修复rancher在错误页面生成按钮的问题。

#### 2024-03-25 v1.1.0
- 新增对CODING的样式优化。

#### 2024-03-24 v1.0.0
- 初版发布。
