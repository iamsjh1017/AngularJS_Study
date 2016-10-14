package kr.co.angular.board.service;

import java.util.List;

import kr.co.angular.repository.vo.MenuVO;

public interface ChickService {
	
	public List<MenuVO> getMenu() throws Exception;
	public void writeMenu(MenuVO mv) throws Exception;
	public void updateMenu(MenuVO mv) throws Exception;
	public void deleteMenu(int no) throws Exception;
	public MenuVO detailMenu(int no) throws Exception;
}
