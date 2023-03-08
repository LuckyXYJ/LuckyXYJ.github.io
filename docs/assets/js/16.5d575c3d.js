(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{320:function(e,t,a){"use strict";a.r(t);var r=a(6),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"kvo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvo"}},[e._v("#")]),e._v(" KVO")]),e._v(" "),t("p",[e._v("KVO的全称是Key-Value Observing，俗称“键值监听”，可以用于监听某个对象属性值的改变")]),e._v(" "),t("h2",{attrs:{id:"kvo-使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvo-使用方式"}},[e._v("#")]),e._v(" KVO 使用方式")]),e._v(" "),t("h3",{attrs:{id:"_1、添加观察者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、添加观察者"}},[e._v("#")]),e._v(" 1、添加观察者")]),e._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 摘自AFNetworking\nfor (NSString *keyPath in AFHTTPRequestSerializerObservedKeyPaths()) {\n        if ([self respondsToSelector:NSSelectorFromString(keyPath)]) {\n            [self addObserver:self forKeyPath:keyPath options:NSKeyValueObservingOptionNew context:AFHTTPRequestSerializerObserverContext];\n        }\n    }\n")])])]),t("h3",{attrs:{id:"_2、实现-observevalueforkeypath-ofobject-change-context-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、实现-observevalueforkeypath-ofobject-change-context-方法"}},[e._v("#")]),e._v(" 2、实现 observeValueForKeyPath:ofObject:change:context: 方法")]),e._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 摘自AFNetworking\n- (void)observeValueForKeyPath:(NSString *)keyPath\n                      ofObject:(__unused id)object\n                        change:(NSDictionary *)change\n                       context:(void *)context\n{\n    if (context == AFHTTPRequestSerializerObserverContext) {\n        if ([change[NSKeyValueChangeNewKey] isEqual:[NSNull null]]) {\n            [self.mutableObservedChangedKeyPaths removeObject:keyPath];\n        } else {\n            [self.mutableObservedChangedKeyPaths addObject:keyPath];\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"_3、移除观察者-removeobserver-forkeypath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、移除观察者-removeobserver-forkeypath"}},[e._v("#")]),e._v(" 3、移除观察者 removeObserver:forKeyPath:")]),e._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- (void)dealloc {\n    for (NSString *keyPath in AFHTTPRequestSerializerObservedKeyPaths()) {\n        if ([self respondsToSelector:NSSelectorFromString(keyPath)]) {\n            [self removeObserver:self forKeyPath:keyPath context:AFHTTPRequestSerializerObserverContext];\n        }\n    }\n}\n")])])]),t("h2",{attrs:{id:"kvo-禁用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvo-禁用"}},[e._v("#")]),e._v(" KVO 禁用")]),e._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 摘自AFNetworking\n+ (BOOL)automaticallyNotifiesObserversForKey:(NSString *)key {\n    if ([AFHTTPRequestSerializerObservedKeyPaths() containsObject:key]) {\n        return NO;\n    }\n\n    return [super automaticallyNotifiesObserversForKey:key];\n}\n")])])]),t("h2",{attrs:{id:"kvo-设置依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvo-设置依赖"}},[e._v("#")]),e._v(" KVO 设置依赖")]),e._v(" "),t("div",{staticClass:"language-objective-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('+ (NSSet *)keyPathsForValuesAffectingValueForKey:(NSString *)key {\n    if ([key isEqualToString:@"reachable"] || [key isEqualToString:@"reachableViaWWAN"] || [key isEqualToString:@"reachableViaWiFi"]) {\n        return [NSSet setWithObject:@"networkReachabilityStatus"];\n    }\n\n    return [super keyPathsForValuesAffectingValueForKey:key];\n}\n')])])]),t("h2",{attrs:{id:"kvo原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvo原理"}},[e._v("#")]),e._v(" KVO原理")]),e._v(" "),t("p",[e._v("1:动态生成子类:NSKVONotifiy_A")]),e._v(" "),t("p",[e._v("2:给动态子类添加Setter方法")]),e._v(" "),t("p",[e._v("3:消息转发给父类(runtime消息转发)")]),e._v(" "),t("p",[t("img",{attrs:{src:"http://xingyajie.oss-cn-hangzhou.aliyuncs.com/uPic/image-20220601140719614.png",alt:"image-20220601140719614"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"http://xingyajie.oss-cn-hangzhou.aliyuncs.com/uPic/image-20220601140706480.png",alt:"image-20220601140706480"}})]),e._v(" "),t("h3",{attrs:{id:"nsset-valueandnotify的内部实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nsset-valueandnotify的内部实现"}},[e._v("#")]),e._v(" _NSSet*ValueAndNotify的内部实现")]),e._v(" "),t("p",[e._v("调用willChangeValueForKey:")]),e._v(" "),t("p",[e._v("调用原来的setter实现")]),e._v(" "),t("p",[e._v("调用didChangeValueForKey:")]),e._v(" "),t("ul",[t("li",[e._v("didChangeValueForKey:内部会调用observer的observeValueForKeyPath:ofObject:change:context:方法")])]),e._v(" "),t("h2",{attrs:{id:"kvo存在问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kvo存在问题"}},[e._v("#")]),e._v(" KVO存在问题")]),e._v(" "),t("p",[e._v("1、必须成对出现")]),e._v(" "),t("p",[e._v("2、重复添加，重复几次，执行几次响应")]),e._v(" "),t("p",[e._v("3、重复移除，移除超过添加次数后，"),t("strong",[e._v("NSRangeException")]),e._v("报错。")]),e._v(" "),t("p",[t("strong",[e._v("在移除观察的时候NSKVONotifying_XXX 是否移除? + isa 是否会回来?")])]),e._v(" "),t("p",[e._v("答：NSKVONotifying_XXX没有移除。实例对象的isa是会重新指向原类。")])])}),[],!1,null,null,null);t.default=s.exports}}]);