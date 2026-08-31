# Generate Debug Checkpoint

请根据这个 Debug Chat 到目前为止的内容，

生成最新版：

`debug-checkpoint.md`

它之后会交给 Project Sensei，

用于评估是否需要更新：

`01-learning-status.md`

这份文件不是 Debug 历史日志。

只记录：

> 对我的长期 Front-End debugging 能力真正有价值、并且有实际 evidence 支持的信息。

不要为了填满模板而强行生成内容。

如果这个 Debug Chat 最近没有任何值得长期保存的 debugging evidence，
请明确说明：

> 本次无需更新 debug-checkpoint.md

不要制造进步或 weakness。

---

请输出：

# Debug Checkpoint

## Last Updated

使用当前真实日期。

## Important Root Causes Solved

只列值得长期记住的 root cause。

例如：

- Browser API 被放到 Node runtime 执行
- HTTP response failure 与 JavaScript runtime error 的区别
- React state / render lifecycle 导致的问题
- tooling / environment mismatch

不要记录：

- 普通 typo
- 一次性拼写错误
- accidental syntax mistake
- 没有 transferable learning value 的 bug

## Debugging Concepts Improved

只写有实际 evidence 的能力变化。

例如：

- runtime distinction
- HTTP vs JavaScript error
- state / render issue
- Browser API vs Node API
- async error propagation
- environment / tooling distinction

请明确区分：

- Improved
- Still Unstable
- Insufficient Evidence

不要因为只解决过一次问题就自动标记为 mastered。

## Layer Classification Improved

记录我在哪些问题上更能判断属于：

- JavaScript
- React
- Browser
- Node
- Network
- API
- tooling
- Git
- environment

只有在当前 Chat 中有真实 evidence 时才记录。

如果某一层没有 evidence，可以不写。

## Repeated Weaknesses

只记录重复出现、具有长期学习价值的问题。

例如：

- 经常没有先确认 runtime
- 看到错误后过早修改代码
- 不先检查 Network
- hypothesis 太快跳到 framework

如果只是偶发失误，不要记录。

## Important Mental Models

只保存未来 Debug 时仍然有价值的 mental model。

例如：

- 先 classify layer，再尝试 fix
- symptom 不等于 root cause
- smallest test 优先于大范围 refactor
- Browser Web API ≠ JavaScript language itself
- HTTP error ≠ JavaScript runtime error

不要重复 Role Prompt 里已经存在、但本次没有实际学习 evidence 的通用规则。

## Evidence

说明为什么你认为某项能力有变化。

优先使用类似证据：

- 我自己正确分类了问题
- 我提出了合理 hypothesis
- 我使用 smallest test 排除了某一层
- 我主动查看 console / Network / runtime
- 我能够解释 root cause
- 修复后我能解释为什么修复有效
- 我在后续类似问题中没有重复同样错误

不要仅仅因为最终 bug 被修好，就认为 debugging ability improved。

## Suggested Learning-Status Changes

告诉 Project Sensei：

哪些内容值得：

- 加入 `01-learning-status.md`
- 从 weak 升级为 improved
- 继续保留为 weak / unstable
- 暂时不用记录

所有建议必须有本 Debug Chat 的 evidence 支撑。

如果 evidence 不足：

> 建议保持现有 learning-status，不升级能力判断。

---

规则：

- 描述 CURRENT debugging ability，不是 bug 历史
- 不记录普通 typo
- 不记录一次性小错误
- 不记录已经完全无关的历史问题
- 不为了完整而填满每一个 section
- 没有 evidence 的 section 可以写 `None` 或省略具体内容
- 一次成功不等于 mastered
- 修好 bug 不等于 debugging skill 自动提升
- 优先记录 transferable mental models
- 保持简洁，让 Project Sensei 可以快速读取

最后只输出完整 Markdown 内容，

让我可以直接覆盖：

`debug-checkpoint.md`

如果本次没有值得长期保存的内容，
则只输出：

`本次无需更新 debug-checkpoint.md`