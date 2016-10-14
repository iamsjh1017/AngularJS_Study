package kr.co.crud.chicken.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.crud.repository.mapper.ChickenMapper;
import kr.co.crud.repository.vo.ChickenVO;

@Service
public class ChickenServiceImpl implements ChickenService {
	@Autowired
	private ChickenMapper mapper;
	
	// 치킨 등록
	@Override
	public void insertChicken(ChickenVO chicken) throws Exception {
		mapper.insertChicken(chicken);
	}
	
	// 치킨 조회
	@Override
	public List<ChickenVO> selectChicken() throws Exception {
		return mapper.selectChicken();
	}
	
	// 치킨 상세 조회
	@Override
	public ChickenVO selectChickenByName(String name) throws Exception {
		return mapper.selectChickenByName(name);
	}
	
	// 치킨 수정
	@Override
	public void updateChicken(ChickenVO chicken) throws Exception {
		mapper.updateChicken(chicken);
	}
	
	// 치킨 삭제
	@Override
	public void deleteChicken(String name) throws Exception {
		mapper.deleteChicken(name);
	}
}
