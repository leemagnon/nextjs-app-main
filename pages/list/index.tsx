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
    const [currentParams, setCurrentParams] = useState<EmployeeListRequestParams>({limit: 20, page: 1});
    const [selectedRowIdList, setSelectedRowIdList] = useState<string[]>([]);

    const {isLoading, data, refetch} = useQuery('employees', () => getEmployees(token), {
        refetchOnMount: false, 
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
      }); 

    const handleSelectedRows = (selectedRows: string[]) => {
        console.log('selectedRows', selectedRows);
        setSelectedRowIdList(selectedRows);
    };

    const handleDelete = async () => {
        try {
            await Promise.all(
                selectedRowIdList.map(id => axios.delete(``).then(response => response.data))
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
                selectedRowIdList={selectedRowIdList}
                handleSelectedRows={handleSelectedRows}
                handleDelete={handleDelete}
                isLoading={isLoading}
            />
        </LayoutPresenter>
    );
};

export default EmployeeListContainer;