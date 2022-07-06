/* module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: false,
  arrowParens: 'avoid',
  insertPragma: false,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
} */
module.exports = {
  singleAttributePerLine: true,
  printWidth: 100, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  semi: false, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: 'as-needed', // 对象的key是否用引号括起来,有三种选项 "as-needed"|"consistent"|"preserve"
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  trailingComma: 'none', // 选项：none|es5|all， 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  bracketSpacing: true, // 是否在对象的{}内部两侧加空格 true - { foo: bar } false - {foo: bar}.
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 'bracketSpacing': true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  rangeStart: 0, // 仅格式化选中文本 选中文本格式化的起始位置
  rangeEnd: Infinity, // 选中文本格式化的结束位置
  requirePragma: false, // 若为true，文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化
  insertPragma: false, // 当requirePragma参数为true时,此参数为true将向@format标记后面添加一个换行符
  proseWrap: 'always', // 有效选项[always|never|preserve]。当Markdown文本超过printWidth时,是否换行,always-换行 never-不换行 preserve保持原样
  endOfLine: 'lf', // 结尾是 lf-\n cr-\r lfcr-\n\r  auto-保持现有的行尾设置
  htmlWhitespaceSensitivity: 'css', // 是否显示HTML文件中的空格。 有效选项： 'css' - 尊重CSS display属性的设置。 'strict' - 空格被认为是敏感的。 'ignore' - 空格被认为是不敏感的
  vueIndentScriptAndStyle: false, // 是否给vue中的 <script> and <style>标签加缩进
  embeddedLanguageFormatting: 'auto' // 是否格式化嵌入到JS中的html标记的代码段或者Markdown语法 auto-格式化 off-不格式化
}
