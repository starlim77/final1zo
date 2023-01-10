package shop.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.bean.NewProductDTO;
import shop.dao.NewProductDAO;

@Service
public class NewProductServiceImpl implements NewProductService {
	@Autowired
	private NewProductDAO newProductDAO;

	@Override
	public void upload(NewProductDTO newProductDTO) {
		System.out.println(newProductDTO);
		newProductDAO.save(newProductDTO);
	}

	@Override
	public List<NewProductDTO> getNewProductList() {
		return newProductDAO.findAll();
	}

	@Override
	public void update(NewProductDTO newProductDTO) {
		System.out.println(newProductDTO);
		
		newProductDAO.save(newProductDTO);
	}

	@Override
	public void delete(int seq) {
		newProductDAO.deleteBySeq(seq);
	}

//	@Override
//	public List<NewProductDTO> search(Map<String, String> map) {
//		String searchOption = map.get("searchOption");
//		String keyword = map.get("keyword");
//		
//		if(searchOption.equals("brand"))
//			return newProductDAO.getSearchBrand(keyword);
//		else
//			return newProductDAO.getSearchCategory(keyword);
//	}
	
	
}
