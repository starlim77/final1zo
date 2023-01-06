package lookbook.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lookbook.entity.StyleEntity;

@Repository
public interface StyleDAO extends JpaRepository<StyleEntity, String> {
	
	Optional<StyleEntity> findBySeq(int seq);
	
	Optional<StyleEntity> findById(String id);
	
	List<StyleEntity> findAllByIdOrderBySeqDesc(String id); 
	   
}
