import { InputType,Field,Int } from "@nestjs/graphql"
import { type } from "os"


@InputType()
export class AddBookArgs{
    @Field()
    title:string

    @Field((type)=>Int)
    price:number
}