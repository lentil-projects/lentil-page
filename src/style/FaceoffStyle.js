import styled from 'styled-components';

export const FaceoffStyle = styled.div`
background: black;
height: 100vh;
width: 100vw;
position: fixed;
top: 0;

.foreground {
    z-index: 10;
    height: 100vh;
    width: 100vw;
}

.container {
    border: solid yellow;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.panel {
    margin-top: 10vh;
    background: white;
    padding: 35px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
}

h1 {
    color: white;
}

h3 {
    float: right;
    color: white;
    margin: 25px;
    font-size: 3rem;
}

h3:hover {
    cursor: pointer;
    color: purple;
}

.gif {
    height: 250px;
}
`