import {Table, Button, Pagination, Popconfirm} from 'antd';
import {EmployeeInfo} from './EmployeeList.model';

type Props = {
  data: EmployeeInfo[];
  handleDelete: () => unknown;
  handleSelectRow: (rows: string[]) => void;
  selectedRowIDList: string[];
}

const EmployeeListPresenter = ({ data }) => {
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
    },
    {
      title: '삭제',
      key: 'delete',
      render: (text, record) => <Button>삭제</Button>,
    }
  ];

    if (!data || Object.keys(data).length === 0) {
      return null;
    }
  
    return (
      <>
        <ListHeaderWrapper>
          <ListHeaderButtons>
            <Popconfirm
              title={`선택된 ${selectedRowIDList.length}개의 행을 삭제합니다. 정말 삭제하시겠습니까?`}
              onConfirm={handleDelete}
              okText={'삭제'}
              cancelText={'취소'}
            >
              <Button danger htmlType={'button'} disabled={!selectedRowIDList.length}>
                삭제
              </Button>
            </Popconfirm>
          </ListHeaderButtons>
        </ListHeaderWrapper>
        <Table columns={columns} dataSource={data.data.items} rowKey={'id'} loading={isLoading} rowSelection={{
          type: 'checkbox',
          onChange: (selectedKeys: Key[]) => {
            handleSelectRow(selectedKeys as string[]);
          }
        }} />
        <Pagination current={1} onChange={onChange} total={20} />
      </>
    )
    //return data.data.items.map((item) => <div key={item.uid}>{item.uid}</div>);
};

export default EmployeeListPresenter;
