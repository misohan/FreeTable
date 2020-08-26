package com.mmkpdevelopers.freetable.dao;

import com.mmkpdevelopers.freetable.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
