package kr.co.crud.chicken.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.crud.chicken.service.ChickenService;
import kr.co.crud.repository.vo.ChickenVO;

@Controller
@RequestMapping("/chicken")
public class ChickenController {
	@Autowired
	private ChickenService service;
	
	// 치킨 등록
	@RequestMapping("/insert.json")
	@ResponseBody
	public List<ChickenVO> insertChicken(ChickenVO chicken) throws Exception {
		service.insertChicken(chicken);
		return service.selectChicken();
	}
	
	// 치킨 조회
	@RequestMapping("/list.json")
	@ResponseBody
	public List<ChickenVO> selectChicken() throws Exception {
		return service.selectChicken();
	}
	
	// 치킨 상세
	@RequestMapping("/detail.json")
	@ResponseBody
	public ChickenVO selectChickenByName(String name) throws Exception {
		return service.selectChickenByName(name);
	}
	
	// 치킨 수정
	@RequestMapping("/update.json")
	@ResponseBody
	public List<ChickenVO> updateChicken(ChickenVO chicken) throws Exception {
		service.updateChicken(chicken);
		return service.selectChicken();
	}
	
	// 치킨 삭제
	@RequestMapping("/delete.json")
	@ResponseBody
	public List<ChickenVO> deleteChicken(String name) throws Exception {
		service.deleteChicken(name);
		return service.selectChicken();
	}
}
