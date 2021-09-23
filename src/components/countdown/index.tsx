import React, {useState, useEffect} from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/img/background-tokensale.jpg";

const Container = styled.div`
    text-align: center;
    background: #000000;
    font-family: sans-serif;
    font-weight: 100;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const CountDownMain = styled.div`
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
    margin: 10px auto auto auto;
    z-index: 100;
    > div {
        padding: 10px;
        border-radius: 3px;
        background-color:rgba(0, 0, 0, 0.5);
        display: inline-block;
        margin: 5px;
    }
    div > span{
        padding: 15px;
        border-radius: 3px;
        background-color:rgba(68, 68, 68, 0.5);
        display: inline-block;
    }
`

const Header = styled.h1`
    color: #FFF;
    font-weight: 100;
    font-size: 40px;
    padding: 40px 0px 20px;
    margin: auto auto 10px auto;
    z-index: 100;
`

const DisplayTime = styled.span`
    background-color: black;
    font-size: 32px;
    color: white;
`

const SmallText = styled.div`
    padding-top: 5px;
    font-size: 16px;
`

export const CountDown: React.FC<any> = ({deadline}) => {
    const [weeks, setWeeks] = useState(null);
    const [days, setDays] = useState(null);
    const [hours, setHours] = useState(null);
    const [mins, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);
    const getTimeRemaining = (endtime) => {
        var t = endtime - Date.now();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24) % 7);
        var weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
        return {
            'total': t,
            'weeks': weeks,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const t = getTimeRemaining(deadline);
            setWeeks(t.weeks);
            setDays(t.days);
            setHours(('0' + t.hours).slice(-2));
            setMinutes(('0' + t.minutes).slice(-2));
            setSeconds(('0' + t.seconds).slice(-2));
        }, 1000);
        return () => clearTimeout(timer);
    });
	return (
        <Container>
            <div className="background-container"></div>
            <img src={BackgroundImage} className="universeimg"  alt="" />
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <Header>Coming Soon</Header>
            <CountDownMain>
                <div>
                    <DisplayTime>{weeks}</DisplayTime>
                    <SmallText>Weeks</SmallText>
                </div>
                <div>
                    <DisplayTime>{days}</DisplayTime>
                    <SmallText>Days</SmallText>
                </div>
                <div>
                    <DisplayTime>{hours}</DisplayTime>
                    <SmallText>Hours</SmallText>
                </div>
                <div>
                    <DisplayTime>{mins}</DisplayTime>
                    <SmallText>Minutes</SmallText>
                </div>
                <div>
                    <DisplayTime>{seconds}</DisplayTime>
                    <SmallText>Seconds</SmallText>
                </div>
            </CountDownMain>
        </Container>

	);
};
