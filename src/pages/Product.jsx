import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {

    /** useParams
     *  - url의 파라미터 정보를 가져올수 있다.
     *  - 물품의 고유한 값을 설정/ 출력하는데 적합
     *  - useParms는 하나밖에 사용할수 없다. 즉 그 컴포넌트가 가지고있는 고유한 성질을 담을때 유용
     *  - 상품의 고유번호/ 회원 고유번호/ 학번/ 사번
     * 
     * 
     * 
     * 사용방법
     * a. <Route path="/경로: 파라미터정보">
     * b. 컴포넌트 내부로 와서
     *      let {파라미터정보}=useParams();
     * 
     * /321242 파라미터 -> 321242가 상품번호인 상품의 정보를 가져와주자
     * => 그 정보를 이곳에 세팅
     * 
     */
    
    let {num}=useParams();
    console.log(num)

    /** useSearchParmas()
     *  - 라우터 사용 시 QueryString 정보를 가져와서 관리하고 싶을때 사용
     *  - url 뒤에 ? 속성=값&속성=값....
     *  - 사용 방법은 굉장히 다양하다.
     *  - 들어온 경로 파악 / 검색기능/ 인기글, 신규글 카테고리화, .... etc
     */

    const [query,setQuery]=useSearchParams();
    console.log('인기글 여부 포악',query.get('best'))
    
  return (
    <div>
        {num}번째 게시물입니다
    </div>
  )
}

export default Product 