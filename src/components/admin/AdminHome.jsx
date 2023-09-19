import React from "react";
import styled from "styled-components";
import Project from "../../image/blueprint.png";
import { Avatar } from "@mui/material";
import { green, pink } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
function AdminHome() {
 
    return (
        <Box style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"}}>
            <div>
                <div style={{display:"flex", padding:"px"}}>
                    <Avatar sx={{ bgcolor: green[500] }}>  <AssignmentIcon /> </Avatar>
                    <Label>현재 서비스 현황</Label>
                </div>
            <hr/>
                <Title>
                    <h1>등록된 프로젝트  <b style={{color:"#ff1744"}}>100개</b></h1>
                </Title>

                <Title>
                    <h1>총 후원 금액  <b style={{color:"#ff1744"}}>100,000,000원</b></h1>
                </Title>

                <Title>
                    <h1>총 펀딩 금액  <b style={{color:"#ff1744"}}>100,000,000원</b></h1>
                </Title>

                <Title>
                    <h1>등록된 사용자  <b style={{color:"#ff1744"}}>100명</b></h1>
                </Title>

                <Title>
                    <h1>등록된 작가  <b style={{color:"#ff1744"}}>100명</b></h1>
                </Title>
            </div>
        </Box>
    )
}

const Box = styled.div`
    width: 38%;
    display: flex;
    justify-content: column;
    margin-left: 550px;
    margin-top: 50px;
    padding: 15px;
`;

const BaseHeading = styled.h1`
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 30px;
  color: #080808;
  transition: all .4s ease;

   span {
    display: block;
    font-size:.5em; 
    line-height :1.3; 
   }

   em {
     font-style:normal; 
     font-weight :600; 
   }
`;

const Title = styled(BaseHeading)`
    text-transform: capitalize;
    &::before {
        position:absolute; 
        left :0; 
        bottom :0; 
        width :60px; 
        height :2px; 
        content :"";
    }

    & span {
      font-size :13px ;  
      font-weight :500 ;
      text-transform :uppercase ;
      letter-spacing :4px ;
      line-height :3em ;
      padding-left:.25em ;  
      color :rgba(0,0,0,.4) ;  
      padding-bottom :10px
}
`;

const Label = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-left: 10px;
`;

export default AdminHome;