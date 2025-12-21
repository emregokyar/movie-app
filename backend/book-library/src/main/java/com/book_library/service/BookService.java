package com.book_library.service;

import com.book_library.entity.Book;
import com.book_library.entity.Checkout;
import com.book_library.repository.BookRepository;
import com.book_library.repository.CheckoutRepository;
import com.book_library.response_dto.BookListResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookRepository bookRepository;
    private final CheckoutRepository checkoutRepository;

    @Autowired
    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository) {
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
    }

    @Transactional(readOnly = false)
    public Book checkoutBook(String userEmail, Long bookId) throws Exception {
        Optional<Book> book = bookRepository.findById(bookId);
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        // Checking availability and if user is already taking the book or
        if (book.isEmpty() || validateCheckout != null || book.get().getCopiesAvailable() <= 0) {
            throw new Exception("Book doesn't exist or already checked out by user!");
        }

        // Removing a copy
        book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);
        bookRepository.save(book.get());

        // Creating a checkout object
        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                book.get().getId()
        );
        checkoutRepository.save(checkout);

        return book.get();
    }

    @Transactional(readOnly = true)
    public boolean checkoutBookByUser(String userEmail, Long bookId) {
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        return validateCheckout != null;
    }

    @Transactional(readOnly = true)
    public int currentLoansCount(String userEmail) {
        return checkoutRepository.findBooksByUserEmail(userEmail).size();
    }

    @Transactional(readOnly = true)
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Transactional(readOnly = true)
    public BookListResponse getBooksBySearch(String title, Integer currentPageNumber, Integer booksPerPage, String category) {
        Optional<List<Book>> searchedBooks;
        // Depends on the request send a list
        if (category == null || category.isEmpty()) {
            searchedBooks = bookRepository.searchBooksByTitle(("%" + title + "%"));
        } else {
            searchedBooks = bookRepository.searchBooksByTitleAndCategory(("%" + title + "%"), category);
        }
        return searchedBooks.map(books -> turnIntoBookResponse(books, booksPerPage, currentPageNumber)).orElseGet(BookListResponse::new);
    }

    private BookListResponse turnIntoBookResponse(List<Book> books, Integer booksPerPage, Integer currentPageNumber) {
        int totalBooks = books.size();
        double res = (double) totalBooks / booksPerPage;
        int totalPages = (int) Math.ceil(res);

        int limitNum;
        if (totalPages == currentPageNumber) {
            int remainingNum = totalBooks % booksPerPage;
            if (remainingNum == 1) {
                limitNum = booksPerPage;
            } else {
                limitNum = remainingNum;
            }
        } else {
            limitNum = booksPerPage;
        }

        List<Book> bookList = books.stream()
                .skip((long) currentPageNumber * booksPerPage)
                .limit(limitNum)
                .toList();

        return new BookListResponse(totalPages, totalBooks, bookList);
    }

    @Transactional(readOnly = true)
    public Book getBookInfo(Integer bookId) {
        Optional<Book> retrievedBook = bookRepository.findById(bookId.longValue());
        return retrievedBook.orElseGet(Book::new);
    }
}
