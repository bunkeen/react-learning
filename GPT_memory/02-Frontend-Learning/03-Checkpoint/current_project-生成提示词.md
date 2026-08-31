# Generate Current Project Checkpoint

请根据我们当前 Project 的最新状态，生成一份完整的：

`current-project.md`

这份文件用于：

1. 保存当前 Project 的现场状态
2. 当前 Project Chat 太长 / 卡顿时进行交接
3. 让新的 Project Sensei 可以快速继续
4. 避免依赖旧 Chat 的完整历史

请输出以下结构：

# Current Project Checkpoint

## Project Name

## Last Updated

使用当前真实日期。

## Project Purpose

这个项目目前主要训练什么能力，以及为什么现在做它。

## Current Goal

目前正在试图完成的阶段目标。

如果主项目当前因为 prerequisite / knowledge gap 暂停，并正在 Learning Mode 中补相关知识，请如实说明，不要假装项目正在直接开发。

## Completed

已经完成、当前仍然重要的功能或学习节点。

不要记录所有历史小步骤。

## Currently Working On

目前正在写 / 思考 / 修改什么。

如果当前是在 Learning Mode，例如为了主项目补 Promise / async / API / React mental model 等 prerequisite，请明确写出：

- 当前补什么
- 为什么它和主项目有关
- 学到什么程度后应该回到项目

## Current Architecture / Data Flow

只记录新老师接手项目真正需要知道的：

- components
- important state
- props
- API
- important data structures
- relevant files
- current data flow

如果当前暂时没有正在修改 architecture，可以保持简洁。

## Important Technical Decisions

例如：

- 为什么暂时不用 TanStack Query
- 为什么先手写 loading/error
- 为什么暂时不拆某个 component
- 为什么主项目当前暂时进入 Learning Mode

只保留仍然有效的 decision。

## Known Problems / Technical Debt

当前明确知道但还没解决的问题。

## Knowledge Gaps Discovered

项目暴露出的、目前还不够稳定的知识。

区分：

- 当前正在补的 knowledge gap
- 已发现但暂时 deferred 的 knowledge gap

## Next Recommended Step

只给最值得做的 1～3 个下一步。

优先告诉下一位 Project Sensei：

> 从哪里继续，而不是重新教学已经掌握的内容。

## Deliberately Deferred / Not Yet

我们明确决定暂时不要做的东西。

包括暂时不学、暂时不重构、暂时不引入的技术。

## Resume Instruction

用 2～5 句话告诉下一位 Project Sensei：

- 接手以后应该从哪里开始
- 当前是 Project Mode 还是 Learning Mode
- 不要重新从头教学什么
- 什么条件满足后应该进入下一阶段

---

规则：

- 描述 CURRENT STATE，不是历史学习日记
- 删除已经过时的信息
- 不要记录普通 typo
- 不要记录所有聊天内容
- 保持足够简洁
- 不要为了填满模板而编造不存在的信息
- 如果当前没有直接修改项目，而是在补 prerequisite，也要如实记录
- 目标是让新的 Senior Front-End Developer 可以直接接手

最后只输出完整 Markdown 内容，

让我可以直接覆盖 `current-project.md`。