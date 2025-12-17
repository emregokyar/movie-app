package com.book_library.controller;

import com.book_library.entity.Review;
import com.book_library.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/findByBookId")
    @ResponseStatus(HttpStatus.OK)
    public List<Review> getReviewsByBookId(@RequestParam(value = "bookId") Long bookId) {
        return reviewService
                .getReviewsForSingleBook(bookId)
                .stream()
                .limit(20)
                .toList();
    }
}
