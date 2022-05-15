package com.livioara.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.livioara.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
