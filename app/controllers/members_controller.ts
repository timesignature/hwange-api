import type { HttpContext } from '@adonisjs/core/http'

import {membership_benefits} from "../../share.js";
import http from "../../http.js";
import vine from "@vinejs/vine";

export default class MembersController {
  async getInformation({request}:HttpContext){

    const body = await vine.compile(vine.object({
      MemberNo: vine.string().trim(),
      Suffix: vine.string().trim(),
    })).validate(request.all())

    const {data} = await http.post(`${membership_benefits}`,body)
    return data
  }
}
