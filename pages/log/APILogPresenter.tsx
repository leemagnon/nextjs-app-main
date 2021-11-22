import {Table, Button} from 'antd';

const APILogPresenter = ({ data }) => {
  console.log('API로그')
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

  const columns = [
    {
      title: '이름2',
      dataIndex: 'enName',
      key: 'enName',
    },
    {
      title: '가격2',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '삭제2',
      key: 'delete',
      render: (text, record) => <Button>삭제</Button>,
    }
  ];

    if (!data || Object.keys(data).length === 0) {
      return null;
    }
  
    return (
      <>
        <Table rowKey={'uid'} columns={columns} dataSource={data.data.items} />
      </>
    )
    //return data.data.items.map((item) => <div key={item.uid}>{item.uid}</div>);
};

export default APILogPresenter;
