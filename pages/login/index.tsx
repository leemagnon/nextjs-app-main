import LoginPresenter from "./LoginPresenter";
import {QueryClient, useMutation} from 'react-query'
import axios from 'axios';
import {useFormik} from 'formik';
import Router from 'next/router';
import {useToken} from '../../components/Token';
import {LoginType} from '../../interfaces/index';

const login = async (data: LoginType) => {
    const {data: response} = await axios.post('https://dev-app.fanddle.co.kr/signin', data);
    return response.data;
};

const LoginContainer = () => {
    const {setToken} = useToken();

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
          id: '',
          password: '',
          type: '1',
          accountType: '0',
          language: 'ko',
        },
        onSubmit: (values: LoginType) => {
            mutate(values);
        },
      });

    const queryClient = new QueryClient();

    const {mutate, isLoading} = useMutation(login, {
        onSuccess: data => {
          alert(data.accessToken)
          setToken(data.accessToken);
          Router.push('/list');
        },
        onError: () => {
          alert("there was an error")
        },
        onSettled: () => {
          queryClient.invalidateQueries('create');
        }
      }); 
   
    return (
          <LoginPresenter handleSubmit={handleSubmit} handleChange={handleChange}/>
    );
};

export default LoginContainer;