import {Table, Button, Pagination, Popconfirm} from 'antd';
import { Key } from 'react';
import {EmployeeInfo} from './EmployeeList.model';

type Props = {
  data: EmployeeInfo[];
  selectedRowIdList: string[];
  handleSelectedRows: (rows: string[]) => void;
  handleDelete: () => Promise<void>;
  isLoading: boolean;
}

const EmployeeListPresenter = ({ 
  data, 
  selectedRowIdList, 
  handleSelectedRows,
  handleDelete,
  isLoading
 }) => {
   console.log('임직원관리')
  // const columns = [
  //   {
  //     title: '사번',
  //     dataIndex: 'no',
  //     key: 'no',
  //   },
  //   {
  //     title: '이름',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: '이메일',
  //     dataIndex: 'email',
  //     key: 'email',
  //   },
  //   {
  //     title: '금지',
  //     dataIndex: 'is_banned',
  //     key: 'is_banned',
  //   },
  //   {
  //     title: '삭제',
  //     key: 'delete',
  //     render: (text, record) => <Button>삭제</Button>,
  //   }
  // ];
  const onChange = (page, pageSize) => {
    console.log(page);
    console.log(pageSize);
  }
  const columns = [
    {
      title: '이름',
      dataIndex: 'enName',
      key: 'enName',
    },
    {
      title: '가격',
      dataIndex: 'price',
      key: 'price',
    }
  ];

    if (!data || Object.keys(data).length === 0) {
      return null;
    }
  
    return (
      <>
        <div>
          <Popconfirm
            title={`선택된 ${selectedRowIdList.length}개의 행을 삭제합니다. 정말 삭제하시겠습니까?`}
            onConfirm={handleDelete}
            okText={'삭제'}
            cancelText={'취소'}
          >
            <Button danger htmlType={'button'} disabled={!selectedRowIdList.length}>
              삭제
            </Button>
          </Popconfirm>
        </div>
        <Table columns={columns} dataSource={data.data.items} rowKey={'uid'} loading={isLoading} rowSelection={{
          type: 'checkbox',
          onChange: (selectedKeys: Key[]) => {
            handleSelectedRows(selectedKeys as string[]);
          }
        }} />
        <Pagination current={1} onChange={onChange} total={20} />
      </>
    )
};

export default EmployeeListPresenter;
