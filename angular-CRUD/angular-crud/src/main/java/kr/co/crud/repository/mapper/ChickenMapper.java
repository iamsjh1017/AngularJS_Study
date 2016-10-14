package kr.co.crud.repository.mapper;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.co.crud.repository.vo.ChickenVO;

@Repository
public class ChickenMapper {
	@Autowired
	private SqlSessionTemplate sessionTemplate;
	
	// 치킨 등록
	public void insertChicken(ChickenVO chicken) {
		sessionTemplate.insert("crud.repository.mapper.ChickenMapper.insertChicken", chicken);
	}
	
	// 치킨 조회
	public List<ChickenVO> selectChicken() {
		return sessionTemplate.selectList("crud.repository.mapper.ChickenMapper.selectChicken");
	}
	
	// 치킨 상세 조회
	public ChickenVO selectChickenByName(String name) {
		return sessionTemplate.selectOne("crud.repository.mapper.ChickenMapper.selectChickenByName", name);
	}
	
	// 치킨 수정
	public void updateChicken(ChickenVO chicken) {
		sessionTemplate.update("crud.repository.mapper.ChickenMapper.updateChicken", chicken);
	}
	
	// 치킨 삭제
	public void deleteChicken(String name) {
		sessionTemplate.delete("crud.repository.mapper.ChickenMapper.deleteChicken", name);
	}
}
