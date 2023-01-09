package lookbook.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import lookbook.bean.StyleDTO;
import lookbook.entity.StyleEntity;
import lookbook.service.StyleService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "lookbook")
public class styleController {
	@Autowired
	private StyleService styleService;
	
		
	@PostMapping(path="upload" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void upload(@RequestBody List<MultipartFile> list, @ModelAttribute StyleDTO styleDTO, HttpSession session) {
		//System.out.println("list= " + list);	
		
		System.out.println("컨드롤러 dto="+ styleDTO);
		styleService.save(list, styleDTO);

	}
	
	
	//내 id를 들고가서 내 게시글만 뿌리기
	@GetMapping(path="findAllMyList/{id}")
	public List<StyleDTO> findAllMyList(@PathVariable String id) {
		//좋아요조회 styleService.findLikes(id,style_seq);
		return styleService.findAllMyList(id);
	}
	
	//내 id 글 1개만 보기
	@GetMapping(path="findMyListDetail/{seq}")
	@ResponseBody
	public StyleDTO findMyListDetail(@PathVariable int seq) {
		System.out.println("컨트롤러에 seq확인 : "+ seq);
		return styleService.findMyListDetail(seq);
	}
	
		
	
	@GetMapping(path="getStyleList")
	public List<StyleDTO> findAll() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleService.findAll();		
	}
	
	//피드 내용만 업데이트
	@PutMapping(path="update", produces="text/html; charset=UTF-8")
	@ResponseBody
	public void update(@ModelAttribute StyleDTO styleDTO) {
		styleService.save(styleDTO);
	}
	
	//피드 삭제
	@DeleteMapping(path="delete", produces="text/html; charset=UTF-8")
	@Transactional
	@ResponseBody
	public void delete(@RequestParam int seq) {
		System.out.println("컨트롤러 딜리트 seq =" + seq);
		styleService.delete(seq);
	}
	

	
//좋아요
    @PostMapping(path="likes")
    @ResponseBody
    //public int likes(String member_id, int style_seq) {
    //public int likes(@RequestParam String member_id, @RequestParam int seq) {
    public int likes(@ModelAttribute StyleDTO styleDTO) {
//    	System.out.println("컨트롤러  member_id "+ member_id);
//        System.out.println("컨트롤러 style_seq" + seq);
//    	int result = styleService.saveLikes(member_id,seq);
//        return result;
        return 100;
    }
		

	
}
