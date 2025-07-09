import { defineComponent } from "convex/server"
import {mutation} from "./_generated/server"
import {v} from "convex/values"
const images = ["public/globe.svg"]

export const create = mutation(
    {
        args:{
            orgId: v.string(),
            title: v.string(),
        },
        handler: async (ctx,args)=>{
            const identity = await ctx.auth.getUserIdentity()
            if (!identity){
                throw new Error("unauthorized")
            }
            const randomImage = images[Math.floor(Math.random()*images.length)]
            console.log(randomImage,"TEST")
            const boards = await ctx.db.insert("boards",{title:args.title,orgId:args.orgId,authorId:identity.subject,authorName:identity.name!,imageUrl:randomImage})
            return boards;
        }

    }
)