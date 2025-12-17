package com.book_library.service;

import com.book_library.entity.Review;
import com.book_library.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Transactional(readOnly = true)
    public List<Review> getReviewsForSingleBook(Long bookId) {
        Optional<List<Review>> reviews = reviewRepository.findByBookId(bookId);
        return reviews
                .orElseGet(ArrayList::new);
    }
}
