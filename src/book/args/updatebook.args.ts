import { InputType,Field,Int } from "@nestjs/graphql"
import { type } from "os"


@InputType()
export class UpdateBookArgs{
    @Field((type)=>Int)
    id:number


    @Field()
    title:string

    @Field((type)=>Int)
    price:number
}