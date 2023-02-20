(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{320:function(_,t,a){"use strict";a.r(t);var v=a(6),i=Object(v.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"app-启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-启动"}},[_._v("#")]),_._v(" APP 启动")]),_._v(" "),t("p",[_._v("APP的启动可以分为2种:")]),_._v(" "),t("ul",[t("li",[_._v("冷启动（Cold Launch）：从零开始启动APP")]),_._v(" "),t("li",[_._v("热启动（Warm Launch）：APP已经在内存中，在后台存活着，再次点击图标启动APP")])]),_._v(" "),t("p",[_._v("APP启动时间的优化，主要是针对冷启动进行优化")]),_._v(" "),t("p",[_._v("通过添加环境变量可以打印出APP的启动时间分析（Edit scheme -> Run -> Arguments）")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("DYLD_PRINT_STATISTICS")]),_._v("设置为1")]),_._v(" "),t("li",[_._v("如果需要更详细的信息，那就将"),t("strong",[_._v("DYLD_PRINT_STATISTICS_DETAILS")]),_._v("设置为1")])]),_._v(" "),t("h2",{attrs:{id:"启动过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动过程"}},[_._v("#")]),_._v(" 启动过程")]),_._v(" "),t("p",[_._v("APP的冷启动可以概括为3大阶段")]),_._v(" "),t("ul",[t("li",[_._v("dyld")]),_._v(" "),t("li",[_._v("runtime")]),_._v(" "),t("li",[_._v("main")])]),_._v(" "),t("p",[_._v("APP的启动由dyld主导，将可执行文件加载到内存，顺便加载所有依赖的动态库")]),_._v(" "),t("p",[_._v("并由runtime负责加载成objc定义的结构")]),_._v(" "),t("p",[_._v("所有初始化工作结束后，dyld就会调用main函数")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://xingyajie.oss-cn-hangzhou.aliyuncs.com/uPic/image-20220613144628111.png",alt:"image-20220613144628111"}})]),_._v(" "),t("h3",{attrs:{id:"dyld-过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dyld-过程"}},[_._v("#")]),_._v(" dyld 过程")]),_._v(" "),t("p",[_._v("dyld（dynamic link editor），Apple的动态链接器，可以用来装载Mach-O文件（可执行文件、动态库等）")]),_._v(" "),t("p",[_._v("启动APP时，dyld所做的事情有")]),_._v(" "),t("ul",[t("li",[_._v("装载APP的可执行文件，同时会递归加载所有依赖的动态库")]),_._v(" "),t("li",[_._v("当dyld把可执行文件、动态库都装载完毕后，会通知Runtime进行下一步的处理")])]),_._v(" "),t("h3",{attrs:{id:"runtime-过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime-过程"}},[_._v("#")]),_._v(" runtime 过程")]),_._v(" "),t("ul",[t("li",[_._v("启动APP时，runtime所做的事情有\n"),t("ul",[t("li",[_._v("调用map_images进行可执行文件内容的解析和处理")]),_._v(" "),t("li",[_._v("在load_images中调用call_load_methods，调用所有Class和Category的+load方法")]),_._v(" "),t("li",[_._v("进行各种objc结构的初始化（注册Objc类 、初始化类对象等等）")]),_._v(" "),t("li",[_._v("调用C++静态初始化器和__attribute__((constructor '解析引用锚文本失败，请尝试更新该引用指向的定义块后再重新打开该文档'))修饰的函数")])])]),_._v(" "),t("li",[_._v("到此为止，可执行文件和动态库中所有的符号(Class，Protocol，Selector，IMP，…)都已经按格式成功加载到内存中，被runtime 所管理")])]),_._v(" "),t("h3",{attrs:{id:"main-过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-过程"}},[_._v("#")]),_._v(" Main 过程")]),_._v(" "),t("p",[_._v("UIApplicationMain函数，AppDelegate的application:didFinishLaunchingWithOptions:方法")]),_._v(" "),t("h2",{attrs:{id:"启动优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动优化"}},[_._v("#")]),_._v(" 启动优化")]),_._v(" "),t("p",[t("strong",[_._v("dyld")])]),_._v(" "),t("p",[_._v("减少动态库、合并一些动态库（定期清理不必要的动态库）")]),_._v(" "),t("p",[_._v("减少Objc类、分类的数量、减少Selector数量（定期清理不必要的类、分类）")]),_._v(" "),t("p",[_._v("减少C++虚函数数量")]),_._v(" "),t("p",[_._v("Swift尽量使用struct")]),_._v(" "),t("p",[t("strong",[_._v("runtime")])]),_._v(" "),t("p",[_._v("用+initialize方法和dispatch_once取代所有的__attribute__((constructor '解析引用锚文本失败，请尝试更新该引用指向的定义块后再重新打开该文档'))、C++静态构造器、ObjC的+load")]),_._v(" "),t("p",[t("strong",[_._v("main")])]),_._v(" "),t("p",[_._v("在不影响用户体验的前提下，尽可能将一些操作延迟，不要全部都放在finishLaunching方法中\n按需加载")])])}),[],!1,null,null,null);t.default=i.exports}}]);