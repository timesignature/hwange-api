import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import {membership_benefits, membership_information} from "../../share.js";
import http from "../../http.js";
import vine from "@vinejs/vine";


interface Benefit {
  COMPANY_NAME:string;
  USER_ID:string;
  API_KEY:string;
  PROVIDER_CODE:string;
  MemberNo:string;
  Suffix:string;

}

export default class MembersController {
  async getMemberBenefits({request}:HttpContext){

    const {MemberNo, Suffix} = await vine.compile(vine.object({
      MemberNo: vine.string().trim(),
      Suffix: vine.string().trim(),
    })).validate(request.all())


    const payload=<Benefit>{
      COMPANY_NAME:env.get("COMPANY_NAME"),
      PROVIDER_CODE:env.get("PROVIDER_CODE"),
      USER_ID:env.get("USER_ID"),
      API_KEY: env.get("API_KEY"),
      MemberNo:MemberNo,
      Suffix: Suffix
    }


     try{
       const {data} = await http.post(`${membership_benefits}`, payload)
       return data
     }catch(e){
          console.log(e)
          return null
     }
  }


  async getMemberInformation({request}:HttpContext){

    const {MemberNo, Suffix} = await vine.compile(vine.object({
      MemberNo: vine.string().trim(),
      Suffix: vine.string().trim(),
    })).validate(request.all())


    const payload=<Benefit>{
      COMPANY_NAME:env.get("COMPANY_NAME"),
      PROVIDER_CODE:env.get("PROVIDER_CODE"),
      USER_ID:env.get("USER_ID"),
      API_KEY: env.get("API_KEY"),
      MemberNo:MemberNo,
      Suffix: Suffix
    }


    try{
      const {data} = await http.post(`${membership_information}`, payload)
      return data
    }catch(e){
      console.log(e)
      return null
    }
  }
}
