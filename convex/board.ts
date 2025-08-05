import { defineComponent } from "convex/server"
import {mutation} from "./_generated/server"
import {v} from "convex/values"
const images =[ 
  "/placeholders/cake-svgrepo-com.svg",
  "/placeholders/cheese-svgrepo-com.svg",
  "/placeholders/donut-svgrepo-com.svg",
  "/placeholders/egg-svgrepo-com.svg",
  "/placeholders/lemon-svgrepo-com.svg",
  "/placeholders/luke-svgrepo-com.svg"]

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

            const boards = await ctx.db.insert("boards",{title:args.title,orgId:args.orgId,authorId:identity.subject,authorName:identity.name!,imageUrl:randomImage})
            return boards;
        }

    }
)

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, { id }) => {
    const identity = await ctx.auth.getUserIdentity();
    // TODO: perform deletion logic with `id` and `identity`
    if (!identity) {
      throw new Error("unauthorized");
    }
    await ctx.db.delete(id);
    // or whatever you want to return
  },
});  