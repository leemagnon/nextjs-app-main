import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {LoginWrapper, LoginCard, LoginAlert, LoginForm, EmailInput, PasswordInput, LoginButton} from './Login.style';
import {warn_message, warn_description} from './LoginText';

const LoginPresenter = ({handleSubmit, handleChange}) => (
    <LoginWrapper>
        <LoginCard title={'관리자 로그인'} hoverable>
            <LoginAlert message={warn_message} description={warn_description} type='warning' />
            <LoginForm onSubmit={handleSubmit}>
                <EmailInput name="id" placeholder="이메일" prefix={<UserOutlined />} onChange={handleChange}/>
                <PasswordInput
                    name="password"
                    placeholder="비밀번호"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={handleChange}
                />
                <LoginButton htmlType="submit" type="primary">로그인</LoginButton>
            </LoginForm>
        </LoginCard>
    </LoginWrapper>
);

export default LoginPresenter;
