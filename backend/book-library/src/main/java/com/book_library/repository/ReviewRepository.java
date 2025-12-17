package com.book_library.repository;

import com.book_library.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    //Page<Review> findByBookId(@RequestParam("book_id") Long bookId, Pageable pageable);
    Optional<List<Review>> findByBookId(Long bookId);
}
