import {useState} from 'react';
import EmployeeListPresenter from "./EmployeeListPresenter";
import { useQuery } from 'react-query'
import axios from 'axios';
import {useToken} from '../../components/Token';
import LayoutPresenter from '../../components/Layout/LayoutPresenter';
import {message} from 'antd';
import { EmployeeListRequestParams } from './EmployeeList.model';

const getEmployees = async (token: string) => {
    const {data} = await axios.get(`https://dev-app.fanddle.co.kr/item/list?page=0&count=5&word=${encodeURI('티백')}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
 
    return data;
};

const EmployeeListContainer = () => {
    const {token} = useToken();
    const [page, setPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);
    const [currentParams, setCurrentParams] = useState<EmployeeListRequestParams>({limit: 20, page: 1});
    const [selectedRowIdList, setSelectedRowIdList] = useState<string[]>([]);

    let {isLoading, data, refetch} = useQuery('employees', () => getEmployees(token), {
        refetchOnMount: false, 
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
      }); // prefetch된 쿼리에 대해 useQuery 인스턴스가 없으면 cacheTime에 지정된 시간 후에 삭제되고 가비지 콜렉팅 된다.

    const handleSelectRow = (selectedRows: string[]) => {
        setSelectedRowIdList(selectedRows);
    };

    const handleDelete = async () => {
        try {
            await Promise.all(
                selectedRowIdList.map(id => axios.delete(`${BASE_URL}/뭐뭠`).then(response => response.data))
            );
            setSelectedRowIdList([]);
            await refetch();
            message.success('성공적으로 삭제했습니다.');
        } catch (err) {
            message.error('오류 발생')
        }
    };

    return (
        <LayoutPresenter title='임직원 관리'>
            <EmployeeListPresenter 
                data={data}
            />
        </LayoutPresenter>
    );
};

export default EmployeeListContainer;