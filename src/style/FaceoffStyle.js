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
    width: 300px;
    background: lightgray;
}

button {
    width: 200px;
    margin: 0 auto;
    height: 2.5rem;
    font-size: 2rem;
    border-radius: 7px;
    background: lightgray;
    background: rgba(14,52,145,.35);
}

button:hover {
    background: rgba(14,52,145,.75);
    cursor: pointer;
}

.faceoff-team {
    background: white;
    margin: 10px;
    width: 575px;
    padding: 10px;
    text-align: left;
    border-radius: 7px;
}

.title {
    height: 100px;
    margin-bottom: 50px;
    border-radius: 50px;
}

h3:hover {
    cursor: pointer;
    color: purple;
}

.gif {
    height: 250px;
    border-radius: 50px;
}

.civ {
    height: 75px;
    width: 75px;
}

#x {
    font-size: 65px;
    margin-bottom: -15px;
}

.fa-times {
    margin: 25px;
    font-size: 2.5rem;
}

li {
    list-style: none;
}

.civs {
    justify-content: flex-start;
}

h3 {
    width: 100%;
}

h6 {
    margin: 0;
    margin-bottom: 50px;
    font-size: 5rem;
    color: slategrey;
    font-weight: 300;
    text-shadow: -2px 2px rgba(94,206,236);
    padding: 0 25px; 
    background: rgba(14,52,145,.35);
    border-radius: 50px;
    height: 4.75rem;
    display: flex;
    align-items: center;
}

.team-logo {
    height: 60px;
    width: 60px;
}

h1 {
    font-size: 1.5rem;
}
`