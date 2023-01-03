package lookbook.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lookbook.bean.StyleDTO;

public interface StyleService {

	
	public void save(List<MultipartFile> list,StyleDTO styleDTO);

	public List<StyleDTO> findAll();
		
}
