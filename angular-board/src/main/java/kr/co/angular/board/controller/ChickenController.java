package kr.co.angular.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.angular.board.service.ChickService;
import kr.co.angular.repository.vo.MenuVO;

@Controller
@RequestMapping("/chicken")
public class ChickenController {
	
	@Autowired
	private ChickService service;
	
	@RequestMapping("/getMenu.do")
	@ResponseBody
	public List<MenuVO> getMenu() throws Exception {
		return service.getMenu();
	}
	
	@RequestMapping("/writeMenu.do")
	@ResponseBody
	public List<MenuVO> writeMenu(MenuVO mv) throws Exception {
		service.writeMenu(mv);
		return service.getMenu();
	}
	@RequestMapping("/updateMenu.do")
	@ResponseBody
	public List<MenuVO> updateMenu(MenuVO mv) throws Exception {
		service.updateMenu(mv);
		return service.getMenu();
	}
	
	@RequestMapping("deleteMenu.do")
	@ResponseBody
	public List<MenuVO> deleteMenu(int no) throws Exception {
		service.deleteMenu(no);
		return service.getMenu();
	}
}
