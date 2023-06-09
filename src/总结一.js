// 1.vue是什么？
/*
  Vue是一种流行的JavaScript框架，用于构建用户界面。
  Vue提供了一组工具和库，使得构建复杂的单页应用程序变得更加容易和高效。

"渐进式"是Vue的一个关键特点，它表示Vue可以逐步应用到现有的应用程序中，
而不需要一次性将整个应用程序重写。Vue可以与其他库和框架结合使用，也可以逐步引入Vue的功能，例如使用Vue来处理特定的视图或组件，而不必将整个应用程序全部迁移到Vue上。

此外，Vue也提供了许多可选的工具和库，这些工具和库可以根据需要逐步添加到应用程序中，
从而使得开发人员可以根据自己的需求和优先级来选择Vue提供的功能和工具。这也是Vue被称为"渐进式"框架的原因之一。
*/

// 2. @vue-cli工具包
/**
 * (1) yarn global add @vue/cli --- 得到vue命令
 * (2) vue create 脚手架项目名字 --- 得到一套文件夹+文件的标准工程代码
 * (3) yarn serve
 */

// 3.主要入口
/**
 * src/App.vue --- Vue页面的入口
 * src/main.js --- Webpack打包的入口
 * public/index.html --- 浏览器真正运行的html文件
 */

// 4.单文件组件（.vue文件）
/**
 * 单文件组件是Vue组件的标准写法，它促进了更好的组件化开发。
 * 单文件组件将组件的结构、样式和行为都封装在一个文件中，使得组件更加独立、可重用和易于管理。
 * 单文件组件是Vue框架的一个重要特性，它提高了代码的可维护性、可重用性和组件化程度，同时也使得开发流程更加便捷和高效。
 */

// 5.MVVM设计模式
/**
 * MVVM是一种常见的设计模式，用于构建现代Web应用程序。MVVM代表Model-View-ViewModel。
 * 在MVVM中，应用程序的核心是由三个组件构成的：
 * Model：表示应用程序的数据和业务逻辑。
 * View：表示用户界面，它向用户显示数据并接收用户的输入。
 * ViewModel：作为Model和View之间的中介，将数据从Model中提取出来，并将其转换为View可以使用的格式。ViewModel还响应View的事件和命令，并将其传递给Model来执行相关的业务逻辑。
 * ViewModel负责管理数据的状态和变化，View负责展示数据，并且通过数据绑定机制将数据和ViewModel进行绑定，从而实现了双向数据绑定，使得应用程序的开发更加高效和便捷。
 * MVVM的优势在于它将用户界面的逻辑和数据绑定分离开来，使得开发人员可以更加容易地维护和修改应用程序。
 * 总之，MVVM设计模式的目标是简化应用程序的开发和维护，提高开发人员的效率和开发质量。
 */