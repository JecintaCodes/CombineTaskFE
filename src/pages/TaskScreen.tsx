
import React from "react"
import styled from "styled-components";

const TaskScreen = ()=>{
    return(
        <div>
        <Container>
        <Main>
        <CardHolder>
        <Card>
        <Profile></Profile>
        <Name>Jecinta</Name>
        <Task></Task>
        <Time></Time>
        <Button></Button>
        </Card>
        </CardHolder>
        </Main>
        </Container>
        </div>
    )
}

export default TaskScreen


const Button = styled.div``;
const Time = styled.div``;
const Task = styled.div``;
const Name = styled.div``;
const Profile = styled.div``;
const Card = styled.div``;
const CardHolder = styled.div``;
const Main = styled.div``;
const Container = styled.div``;