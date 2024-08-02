import {add, sub} from './constrant';

export const addNumberAction = (num) => ({ type: add, count: num })

export const subNumberAction = (num) => ({ type:sub,  count: num })
