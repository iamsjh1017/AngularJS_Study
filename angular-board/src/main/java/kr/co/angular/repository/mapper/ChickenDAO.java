package kr.co.angular.repository.mapper;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.co.angular.repository.vo.MenuVO;

@Repository
public class ChickenDAO {
	@Autowired
	private SqlSessionTemplate sql;
	
	public List<MenuVO> getMenu() {
		return sql.selectList("kr.co.angular.repository.mapper.ChickenDAO.getMenu");
	}
	public void writeMenu(MenuVO mv) {
		sql.insert("kr.co.angular.repository.mapper.ChickenDAO.writeMenu", mv);
	}
	public void updateMenu(MenuVO mv) {
		sql.update("kr.co.angular.repository.mapper.ChickenDAO.updateMenu",mv);
	}
	public void deleteMenu(int no) {
		sql.delete("kr.co.angular.repository.mapper.ChickenDAO.deleteMenu", no);
	}
}
