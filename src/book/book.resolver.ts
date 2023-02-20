import { Resolver ,Query,Args,Int,Mutation} from "@nestjs/graphql";
import { AddBookArgs } from "./args/addbook.args";
import { UpdateBookArgs } from "./args/updatebook.args";
import { BookService } from "./book.service";
import { Book } from "./schema/book.schema";

@Resolver(of=>Book)
export class BookResolver{

constructor(private readonly bookservice:BookService){}
 
@Query(returns=>[Book],{name:'books'})
getAllBooks(){
    return this.bookservice.findAllBooks();
 }

 @Query(returns=>Book,{name:"bookById"})

 getBookId(@Args({name:'bookId',type:()=>Int})id:number){
     return this.bookservice.findById(id)
 }

 @Mutation(returns=>String,{name:"deleteBook"})
 deleteBookById(@Args({name:"bookId",type:()=>Int})id:number){
    return this.bookservice.deleteBook(id)

 }

 @Mutation(returns=>String,{name:"addBook"})
 addBook(@Args("addBookArgs") addBookArgs:AddBookArgs){
    return this.bookservice.addBook(addBookArgs)

 }
 @Mutation(returns=>String,{name:"updateBook"})
 updateBook(@Args("updateBookArgs") updateBookArgs:UpdateBookArgs){
    return this.bookservice.updateBook(updateBookArgs)

 }




}