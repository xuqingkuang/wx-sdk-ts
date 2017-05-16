# wx-sdk-ts - 微信 Javascript SDK for Typescript

## 为什么有这个项目？

我们都很清楚 Typescript 这种静态类型检查对于微信 Javascript SDK 这种绑在 window
上的东西不是很友好，但是微信的 Javascript 在开发微信应用时又是必须的。

所以有了这个项目，最主要是对微信 Javascript 定义了各种类型，同时简单修正了一下在 webpack
类的打包下的执行情况。

## 这个项目的情况？

该项目主要是根据[官方微信 SDK 文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)转译的，存在 Bug 那是必然的。

事实上在写完第一版 .d.ts 后已经发现了代码和文档方面的出入了。

这个项目会随时跟随着微信最新的 SDK 版本，但在足够稳定前不会去掉 beta 的帽子。

请尽情提交各种 Issue，我将第一时间修复。

## 这个项目未来会如何？

从这个项目中我了解到了微信 Javascript SDK 的具体执行原理，但是这个 SDK 本身的实现并不让人满意，
只是能用而已，这个项目只是会为微信 Javascript SDK 提供类型定义文件，
或许我会另外写一个使用现代 Javascript 特性的 SDK 代码，还请期待。
