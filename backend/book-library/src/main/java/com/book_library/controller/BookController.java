package com.book_library.controller;

import com.book_library.entity.Book;
import com.book_library.response_dto.BookListResponse;
import com.book_library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Book> getFeaturedBooks() {
        return bookService.getAllBooks().stream()
                .limit(9)
                .toList();
    }

    @GetMapping("/filter")
    @ResponseStatus(HttpStatus.OK)
    public BookListResponse filterBooks(@RequestParam(value = "size") Integer size,
                                        @RequestParam(value = "page") Integer page,
                                        @RequestParam(value = "title") String title,
                                        @RequestParam(value = "category", required = false) String category) {
        return bookService.getBooksBySearch(title, page, size, category);
    }

    @GetMapping("/{bookId}")
    @ResponseStatus(HttpStatus.OK)
    public Book retrieveSingleBook(@PathVariable(value = "bookId") Integer bookId) {
        return bookService.getBookInfo(bookId);
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestParam Long bookId) throws Exception {
        String userEmail = "devuser360@gmail.com";
        return bookService.checkoutBook(userEmail, bookId);
    }

    @GetMapping("/secure/isCheckedOut/byUser")
    public boolean checkoutByUser(@RequestParam Long bookId) {
        String userEmail = "devuser360@gmail.com";
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

    @GetMapping("/secure/currentLoans/count")
    public int currentLoansCount() {
        String userEmail = "devuser360@gmail.com";
        return bookService.currentLoansCount(userEmail);
    }
}
