import APILogPresenter from "./APILogPresenter";
import { dehydrate, QueryClient, useQuery } from 'react-query'
import axios from 'axios';
//import { GetServerSideProps, GetServerSidePropsContext } from "next";
import {useToken} from '../../components/Token';
import LayoutPresenter from '../../components/Layout/LayoutPresenter';

const getEmployees = async (token: string) => {
    const {data} = await axios.get(`https://dev-app.fanddle.co.kr/item/list?page=0&count=20&word=${encodeURI('티백')}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
 
    return data;
};

const APILogContainer = () => {
    const {token} = useToken();
  
    let {isLoading, error, data, isFetching} = useQuery('employees', () => getEmployees(token), {
        refetchOnWindowFocus: false
      }); // prefetch된 쿼리에 대해 useQuery 인스턴스가 없으면 cacheTime에 지정된 시간 후에 삭제되고 가비지 콜렉팅 된다.
 
    return (
        <LayoutPresenter title='API 호출 로그'>
            <APILogPresenter data={data} />
        </LayoutPresenter>
    );
};

export default APILogContainer;