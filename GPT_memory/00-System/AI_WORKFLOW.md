# Front-End AI Learning Workflow

## Version

v1 — Two-Sensei System

---

## Core Philosophy

我的 Front-End 学习方式是：

Project-Based Learning
+
Just-in-Time Learning

我不会试图在开始做 Project 以前，
先把所有 JavaScript / React 知识全部学完。

基本循环：

Build
→ encounter a knowledge gap
→ isolate the concept
→ reproduce it
→ understand enough
→ return to building

AI workflow 的目标是辅助学习。

不要让维护 AI workflow 本身占据大量学习时间。

---

## Two-Sensei System

目前有两个长期角色。

### Project Sensei

我的日常主老师。

负责：

Build + Learn + Plan

包括：

- 当前 Project
- conceptual learning
- minimal experiments
- code review
- next steps
- project progression
- learning-status maintenance

Project Sensei 内部包含：

PROJECT MODE

和：

LEARNING MODE

不再单独维护一个 Learning Sensei。

---

### Debug Sensei

Debug 专门老师。

负责：

Diagnose + Fix + Debugging Training

主要处理：

- console errors
- runtime failures
- HTTP / Network
- Browser / Node differences
- API failures
- npm
- Vite
- Git
- environment
- 大量 debugging screenshots / terminal output

---

## Daily Learning Flow

默认从：

Project Sensei

开始。

典型流程：

Project Sensei
      │
      ├── Build Project
      │
      ├── Knowledge Gap
      │       ↓
      │   Learning Mode
      │       ↓
      │   Minimal Experiment
      │       ↓
      │   Back to Project Mode
      │
      └── Concrete Bug / Error
              ↓
          Debug Sensei
              ↓
          Root Cause + Fix
              ↓
          Back to Project Sensei

不是每次学习都需要使用 Debug Sensei。

---

## Learning Mode

当 Project 中出现这些知识缺口时：

- callback
- Promise
- async / await
- closure
- Event Loop
- map / filter
- destructuring
- Date
- React render
- useEffect
- props
- component responsibility

Project Sensei 可以暂时进入 Learning Mode。

推荐学习方式：

concept
→ minimal experiment
→ prediction
→ execution
→ observation
→ explanation
→ variation
→ project application

当理解已经足够支持当前 Project：

停止继续扩展理论。

回到 Project Mode。

---

## When to Use Debug Sensei

当任务主要变成“诊断问题”时，
转到 Debug Sensei。

例如：

- Cannot read properties of undefined
- Failed to resolve import
- npm error
- Vite error
- HTTP failure
- Network request failure
- Node / Browser runtime mismatch
- Git error
- environment problem

尤其是需要大量：

- screenshots
- stack traces
- terminal output
- DevTools information

的时候。

这样可以避免 Project Chat 被大量临时 debugging 内容污染。

---

## Long-Term Memory

长期记忆文件：

`01-learning-status.md`

它回答：

“我的整体 Front-End 水平现在在哪里？”

记录：

- current level
- stable skills
- weaknesses
- current learning priorities
- current project
- important debugging lessons
- next steps

它不是 daily diary。

---

## Current Project Memory

`current-project.md`

回答：

“我现在这个具体 Project 做到哪里了？”

它用于：

- Project 现场保存
- Project Chat 换新窗口
- 新 Project Sensei 接班

更新时间：

- Project 有明显 milestone
- Project context 明显变化
- 准备退休当前 Project Chat

不需要每天更新。

---

## Debug Memory

`debug-checkpoint.md`

只保存有长期学习价值的 debugging evidence。

不要把它变成完整 bug history。

适合在以下情况更新：

- 一段时间解决了多个有价值的 Debug 问题
- 准备更新 learning-status
- 准备退休当前 Debug Chat

---

## Weekly / Milestone Review

大约每周一次，
或者完成重要 milestone 后：

Project Sensei review：

latest 01-learning-status.md
+
current-project.md
+
debug-checkpoint.md
+
Project / Learning Mode 中观察到的实际表现

然后更新：

`01-learning-status.md`

规则：

- 描述 PRESENT state
- exposure 不等于 mastery
- 使用 evidence
- 删除 outdated information
- 更新 weaknesses
- 更新 current project
- 更新 next priorities
- 尽量保持结构稳定

过去状态由 Git history 保存。

---

## Chat Lifecycle

Role 是长期存在的。

具体 Chat 窗口不是。

以下情况可以考虑退休 Chat：

- typing / scrolling 明显变慢
- 已经积累大量 code / screenshot
- AI 开始频繁漏掉以前的重要 context
- 一个主要 Project stage 完成
- 当前 Project 结束

不要等到 Chat 完全不能用才换。

---

## Starting a New Project Sensei Chat

提供：

1. `project-sensei.md`
2. 最新 `01-learning-status.md`
3. 最新 `current-project.md`

然后告诉它：

“继续这些文件记录的学习和 Project 状态。
learning-status 是我的整体学习状态，
current-project 是当前项目现场。
不要重新从零开始教学。”

---

## Starting a New Debug Sensei Chat

提供：

1. `debug-sensei.md`
2. 当前 error / screenshot / code
3. Project Sensei 提供的简短 context（如果需要）

通常不需要把整个 learning-status.md 都提供给 Debug Sensei，

除非这个 Debug 问题确实依赖我的整体学习背景。

---

## Strategic Review

不需要维护永久 Mentor Chat。

当我需要更高层评估时：

1. 新开一个临时 Chat
2. 上传最新 `01-learning-status.md`
3. 必要时上传 `current-project.md`

然后问：

“根据这些资料评估我的真实 Front-End 水平。
告诉我未来 2～4 周最值得发展的能力、
Project 方向和 prerequisite，
并指出有没有明显知识缺口或学习路线偏移。”

大约每 1～2 周，
或者真正需要的时候做即可。

---

## Out-of-Scope Questions

Project Sensei and Debug Sensei should actively recognize when a question is outside the Front-End learning system.

They should not force unrelated questions into their own role.

When a question is clearly unrelated, they should recommend moving it to a more appropriate Chat / GPT category.

Within Front-End:

- Project / concept / learning → Project Sensei
- debugging / runtime / tooling → Debug Sensei

Outside Front-End:

→ recommend a separate appropriate Chat.

## Principle of Simplicity

目前系统保持：

Project Sensei
+
Debug Sensei
+
learning-status.md
+
current-project.md
+
debug-checkpoint.md

不要因为觉得 AI workflow 很有趣，
就继续增加更多 permanent teachers、文件或流程。

如果维护系统本身开始明显占用学习时间：

优先简化系统。