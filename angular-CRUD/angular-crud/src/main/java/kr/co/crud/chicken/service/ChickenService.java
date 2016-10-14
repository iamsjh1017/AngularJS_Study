package kr.co.crud.chicken.service;

import java.util.List;

import kr.co.crud.repository.vo.ChickenVO;

public interface ChickenService {
	//치킨 등록
	public void insertChicken(ChickenVO chicken) throws Exception;
	// 치킨 조회
	public List<ChickenVO> selectChicken() throws Exception;
	// 치킨 상세 조회
	public ChickenVO selectChickenByName(String name) throws Exception;
	// 치킨 수정
	public void updateChicken(ChickenVO chicken) throws Exception;
	// 치킨 삭제
	public void deleteChicken(String name) throws Exception;
}