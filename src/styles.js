import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CD5C5C;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
    border-radius: 8px;
    border-color: #CD5C5C;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

