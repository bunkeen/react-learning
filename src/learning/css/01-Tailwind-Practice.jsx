export const TailwindPractice = () => {
  
  return (
    <>
    <div className="bg-blue-100">
      颜色
    </div>
    <div className="text-yellow-500 text-2xl text-left font-bold">
      文字
    </div>
    <div className="bg-yellow-100 p-10 text-center">
      内部留白
    </div>
    <div className="bg-yellow-100 mx-auto">
      外部间距
    </div>
    <div className="bg-red-100 w-full max-w-3xl">
      尺寸
    </div>
    <div className="flex flex-row bg-red-200">
      <div className="bg-blue-100 p-4">FLEX: 默认flex-row</div>
      <div className="bg-blue-200 p-4">1</div>
      <div className="bg-blue-300 p-4">2</div>
    </div>
    <div className="flex flex-col bg-red-200">
      <div className="bg-blue-100 p-4">FLEX-col</div>
      <div className="bg-blue-200 p-4">1</div>
      <div className="bg-blue-300 p-4">2</div>
    </div>
    <div className="flex flex-row justify-between items-center h-20 bg-red-200">
      <div className="bg-blue-100 p-4 h-12">FLEX-对齐:有居中和俩端</div>
      <div className="bg-blue-200 p-4">1</div>
      <div className="bg-blue-300 p-4">2</div>
    </div>
    <div className="flex flex-row gap-4 bg-red-200">
      <div className="bg-blue-100 p-4">FLEX-子元素间距</div>
      <div className="bg-blue-200 p-4">1</div>
      <div className="bg-blue-300 p-4">2</div>
    </div>
    <div className="flex flex-row border-3 border-green-200 rounded-3xl overflow-hidden bg-red-200">
      <div className="bg-blue-100 p-4">FLEX-边框与圆角</div>
      <div className="bg-blue-200 p-4">多出来的边角用overflow隐藏</div>
      <div className="bg-blue-300 p-4">2</div>
    </div>
    <div className="flex flex-col md:flex-10 bg-red-200">
      <div className="bg-blue-100 p-4">FLEX-responsive响应式布局</div>
      <div className="bg-blue-200 p-4">把页面拉小试试</div>
      <div className="bg-blue-300 p-4">2</div>
    </div>
    <div className="flex gap-4">
      <div className="flex-1 bg-blue-100 p-4">flex-1尝试</div>
      <div className="flex-1 bg-pink-100 p-4 text-left">把它加在子元素上，表示让它参与分配父容器主轴上的空间。同一排卡片都使用它时，会倾向于均分宽度；内容的最小宽度仍可能限制收缩 B</div>
    </div>
    </>
  )
}
// 背景色：    bg-背景颜色-颜色深度 bg-[color]-[num]
// 文字色：    text-文字颜色-颜色深度 text-[color]-[num]
//            text-lg 字号；text-left / text-center 对齐；font-bold 加粗
//            控制大小: {xs,sm,base,lg,xl,2xl,3xl,4xl} or text-[20px]
// 内-留白 padding:  p-[留白距离]  px-[左右留白距离]   py-[上下留白距离]
//                  pt- / pr- / pb- / pl- 上右下左
// 外-间距 margin:  m-[间距]  mx-[左右间距]；my-4 上下；mx-auto 水平居中（需要合适的宽度）
// 尺寸：w-[宽度]；h-[高度]；w-full 是100%宽；max-w-xl 固定最大宽度限制（最大宽度 36rem，实际像素随根字号变化）
//     h- 同理
// Flex 布局：flex 启用；flex-row 横排；flex-col 竖排；flex-wrap 允许换行
// Flex 对齐：justify-center 主轴居中；justify-between 主轴两端分布；items-center 交叉轴居中
// 子元素间距：gap-4（用于 flex / grid）；gap-x-4 列间距；gap-y-4 行间距
// 边框与圆角：border-[边框宽度]；border-blue-200 边框颜色；rounded-lg 圆角 overflow-hidden 裁剪超出容器的内容