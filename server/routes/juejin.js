import mongoose from 'mongoose'
import {Controller, Get, Required, Log} from '../decorator/router'
import {getJuejin} from '../service/juejin'

@Controller('/api/v0/juejin')
export default class JuejinRouter {
  @Get('/')
  @Log
  async getJuejinList(ctx, next) {
    const page = ctx.query.page
    const limit = Number(ctx.query.limit)
    const ids = ctx.query['ids[]'] ? ctx.query['ids[]'] : null
    const {juejin, count} = await getJuejin(page, limit, ids)
    ctx.body = {data: juejin, code: 0, count: count}
  }
}
