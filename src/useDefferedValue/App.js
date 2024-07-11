import {useDeferredValue, useState} from 'react';
import SlowList from './SlowList';

export default function() {
  const [value, setValue] = useState("")
  // 没有使用useDefferedValue之前状态更新 组件更新没有优先级
  // 使用后基于fibber架构，排列优先级使用浏览器 requestIdoback 询问帧的空闲时间对优先的任务执行.useDeferredValue将当前任务变成低优先级
  const text = useDeferredValue(value)
  return (
      <>
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <SlowList text={text}/>
      </>
  )
}
