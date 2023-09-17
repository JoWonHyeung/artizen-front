import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyData } from "../assets/dummyData";
import SwiperMultipleDiv from "../components/SwiperMultipleDiv";
import MenuBar from "../components/MenuBar";
import { ContainerBody } from "../styles/BodyStyle";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Contents(){
    const [data, setData] = useState([]);
    const {type} = useParams();
    const nagivate = useNavigate();
    console.log(type);
    var api = "";
    if(type === 'funding'){
        api = "http://localhost:9999/showAllFunding"
    }else if(type === 'support'){ 
        api = "http://localhost:9999/showAllSupport"
    }

    async function getData(url="", data={}){
        const response = await fetch(url, {
            method: "GET",   
        })
        return response.json();
    }

    const clickMore = (e) => {
        nagivate(`/contents/${type}/${e.target.id}`);
    }

    useEffect(()=>{
        // getData(api).then((data) => {
        //     console.log(data);
        // });

        setData(dummyData);
        // console.log(data);
    }, []);
    
    return (
        <div>
            <MenuBar/>
            <ContainerBody>
                <Title>
                {
                    type=='funding'?
                    <h1>투자</h1>:
                    type=='support'?
                    <h1>후원</h1>: null
                }
                </Title>
                <Title><h2>영화</h2><p onClick={clickMore} id="movie">더보기&gt;</p></Title>
                <SwiperMultipleDiv data={data}></SwiperMultipleDiv>
                <Title><h2>공연</h2><p onClick={clickMore} id="show">더보기&gt;</p></Title>
                <SwiperMultipleDiv data={data}></SwiperMultipleDiv>
                <Title><h2>전시</h2><p onClick={clickMore} id="exhibit">더보기&gt;</p></Title>
                <SwiperMultipleDiv data={data}></SwiperMultipleDiv>
            </ContainerBody>
            <Footer/>
        </div>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 100px;

    p{
        line-height: 48px;
        cursor: pointer;

        font-family: 'SUITE-Regular';
    }
`