import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";
import {Repository} from "typeorm"
import {InjectRepository} from "@nestjs/typeorm"
import { AddBookArgs } from "./args/addbook.args";
import { UpdateBookArgs } from "./args/updatebook.args";

@Injectable()
export class BookService{

constructor( @InjectRepository(BookEntity) public readonly bookRepo:Repository<BookEntity>){

}


async findAllBooks():Promise<BookEntity[]>{
  let books=await this.bookRepo.find()
  return books

}
async findById(id:number):Promise<BookEntity>{
    let books=await this.bookRepo.findOne({where:{id:id}})

    return books
    
  }
  async deleteBook(id:number):Promise<string>{
    await this.bookRepo.delete(id);
    return `Book has been deleted ${id}`
    
  }

  async addBook(addBookargs:AddBookArgs):Promise<string>{
    let book:BookEntity=new BookEntity();
    book.title=addBookargs.title
    book.price=addBookargs.price
    await this.bookRepo.save(book)
    return "book has added"
  }

  async updateBook(updatebookArgs:UpdateBookArgs):Promise<string>{
    let book:BookEntity=await this.bookRepo.findOne({where:{id:updatebookArgs.id}})
    book.title=updatebookArgs.title
    book.price=updatebookArgs.price
    await this.bookRepo.save(book)
    return "Book has been successfully"
  }
  



   

}