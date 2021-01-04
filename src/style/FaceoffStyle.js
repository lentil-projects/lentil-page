import styled from 'styled-components';

export const FaceoffStyle = styled.div`
background: black;
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;

.foreground {
    z-index: 20;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
}

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
}

.panel {
    margin: 50px;
    background: white;
    padding: 35px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
}

.faceoff-team {
    background: white;
    margin: 10px;
    width: 600px;
    padding: 10px;
    text-align: left;
    border-radius: 7px;
}

.title {
    height: 100px;
    margin-bottom: 50px;
}

h4 {
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

.civ {
    height: 75px;
    width: 75px;
}

#x {
    font-size: 65px;
    margin-bottom: -15px;
}
`