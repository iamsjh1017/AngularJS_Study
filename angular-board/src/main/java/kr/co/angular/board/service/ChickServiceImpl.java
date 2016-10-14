package kr.co.angular.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.angular.repository.mapper.ChickenDAO;
import kr.co.angular.repository.vo.MenuVO;

@Service
public class ChickServiceImpl implements ChickService {
	
	@Autowired
	private ChickenDAO dao;
	
	@Override
	public List<MenuVO> getMenu() throws Exception {
		return dao.getMenu();
	}

	@Override
	public void writeMenu(MenuVO mv) throws Exception {
		dao.writeMenu(mv);
	}

	@Override
	public void updateMenu(MenuVO mv) throws Exception {
		dao.updateMenu(mv);
	}

	@Override
	public void deleteMenu(int no) throws Exception {
		dao.deleteMenu(no);
	}

	@Override
	public MenuVO detailMenu(int no) throws Exception {
		return dao.detailMenu(no);
	}

}
