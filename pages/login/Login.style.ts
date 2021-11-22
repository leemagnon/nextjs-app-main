import styled from 'styled-components';
import {Card, Alert, Input, Button} from 'antd';

export const LoginWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginCard = styled(Card)`
    min-width: 400px;
    max-width: 500px;
    height: 500px;
    .ant-card-head {
        font-size: 18px;
        color: rbga(0, 0, 0, 0.85);
        font-weight: 600;
    }
    .ant-card-body {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const LoginAlert = styled(Alert)`
    max-width: 360px;
    margin: 40px 0;
    .ant-alert-message {
        color: red;
        font-weight: bold;
        font-size: 20px;
    }
    .ant-alert-description {
        color: red;
        font-weight: bold;
        font-size: 15px;
        line-height: 1.6;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 140px;
    justify-content: space-evenly;
    .ant-input-affix-warpper {
        border-color: transparent;
        border-bottom: 1px solid #d9d9d9;
    }
`;

export const LoginButton = styled(Button)`
    width: 100%;
    margin-top: 10px;
`;

export const EmailInput = styled(Input)`
    border-color: transparent;
    border-bottom: 1px solid #d9d9d9;
`;

export const PasswordInput = styled(Input.Password)`
    border-color: transparent;
    border-bottom: 1px solid #d9d9d9;
`;