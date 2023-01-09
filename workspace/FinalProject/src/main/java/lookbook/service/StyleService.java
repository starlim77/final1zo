package lookbook.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lookbook.bean.StyleDTO;

public interface StyleService {

	//public void upload(StyleDTO styleDTO);

	public List<StyleDTO> findAllMyList(String id);
	//public List<StyleDTO> findAllMyList(); 
	
	public void save(List<MultipartFile> list,StyleDTO styleDTO);
	
	public void save(StyleDTO styleDTO);
	
	public void delete(int seq);

	public List<StyleDTO> findAll();

	public StyleDTO findMyListDetail(int seq);

	public int saveLikes(String id,int style_seq);
	public int findLikes(String id, int style_seq);

		
}
