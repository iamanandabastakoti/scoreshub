import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LeagueStandings from '../components/LeagueStandings';
import axios from 'axios';
import LeagueStats from '../components/LeagueStats';
import { FaAngleLeft } from "react-icons/fa";

const SingleLeague = () => {
    const { leagueID } = useParams();
    // console.log(leagueID);
    const topLeaguesList = [
        {
            leagueId: '3',
            leagueLogo: '/topleagues/ucl.png',
            leagueName: 'UEFA Champions League',
        },
        {
            leagueId: '4',
            leagueLogo: '/topleagues/europa.png',
            leagueName: 'UEFA Europa League',
        },
        {
            leagueId: '152',
            leagueLogo: '/topleagues/pl.png',
            leagueName: 'Premier League',
            leagueCountry: 'England',
        },
        {
            leagueId: '302',
            leagueLogo: '/topleagues/laliga.png',
            leagueName: 'LaLiga',
            leagueCountry: 'Spain',
        },
        {
            leagueId: '175',
            leagueLogo: '/topleagues/bundesliga.png',
            leagueName: 'Bundesliga',
            leagueCountry: 'Germany',
        },
        {
            leagueId: '207',
            leagueLogo: '/topleagues/seriea.png',
            leagueName: 'Serie A',
            leagueCountry: 'Italy',
        },
        {
            leagueId: '168',
            leagueLogo: '/topleagues/league1.png',
            leagueName: 'League 1',
            leagueCountry: 'France',
        },
    ]
    const singleLeagueData = topLeaguesList.filter(league => league.leagueId === leagueID);
    const [statsBox, setStatsBox] = useState(2);
    const [leagueStandings, setLeagueStandings] = useState([]);
    const [leagueStats, setLeagueStats] = useState([]);
    const fetchStandings = async () => {
        const response = await axios.get(`https://apiv3.apifootball.com/?league_id=${leagueID}&action=get_standings&APIkey=${import.meta.env.VITE_API_KEY}`);
        setLeagueStandings(response.data);
        // console.log(leagueStandings);
    }
    const fetchStats = async () => {
        const response = await axios.get(`https://apiv3.apifootball.com/?action=get_topscorers&league_id=${leagueID}&APIkey=${import.meta.env.VITE_API_KEY}`);
        setLeagueStats(response.data);
        // console.log(leagueStats);
    }
    useEffect(() => {
        window.scrollTo({ top: '0', behavior: 'smooth' });
        setStatsBox(2);
        fetchStandings();
        fetchStats();
    }, [leagueID]);
    // console.log(singleLeagueData)
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/');
    }
    return (
        <div className='flex flex-col gap-6'>
            {
                singleLeagueData.map(({ index, leagueLogo, leagueName, leagueCountry }) => {
                    return (
                        <div key={index} className='flex justify-start items-center gap-2 p-1 bg-primaryBg text-primaryText rounded-lg'>
                            <FaAngleLeft className='text-2xl' onClick={toHome} />
                            <img className='w-10 sm:w-8 h-10 sm:h-8' src={leagueLogo} alt="" />
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-lg sm:text-md font-semibold'>{leagueName}</h3>
                                <span className='text-sm sm:text-[12px] text-subTitleColor'>{leagueCountry}</span>
                            </div>
                        </div>
                    )
                })
            }
            <div className='min-h-80 w-full flex flex-col gap-2'>
                <ul className='flex items-center w-full shadow-sm shadow-navbarBg relative'>
                    <div className={`absolute z-30 bg-primaryBg w-1/2 h-full duration-500 rounded-lg ${statsBox === 2 ? `left-0` : statsBox === 3 ? `left-1/2` : ``}`}>
                    </div>
                    {/* <li className={`relative z-40 text-lg p-1 px-2 w-1/3 flex justify-center duration-500 ${statsBox === 1 ? `text-brandColor` : `text-primaryBg`}`} onClick={() => setStatsBox(1)}>Matches</li> */}
                    <li className={`relative z-40 text-lg sm:text-sm sm:p-2 p-1 px-2 w-1/2 flex justify-center duration-500 laptop:hover:cursor-pointer ${statsBox === 2 ? `text-brandColor` : `text-primaryBg`}`} onClick={() => setStatsBox(2)}>Standings</li>
                    <li className={`relative z-40 text-lg sm:text-sm sm:p-2 p-1 px-2 w-1/2 flex justify-center duration-500 laptop:hover:cursor-pointer ${statsBox === 3 ? `text-brandColor` : `text-primaryBg`}`} onClick={() => setStatsBox(3)}>Stats</li>
                </ul>
                <div className='flex justify-start pt-3 pb-6'>
                    {/* {
                        statsBox === 1 ?
                            <div>All the league matches here</div>
                            : null
                    } */}
                    {
                        statsBox === 2 ?
                            <LeagueStandings leagueStandings={leagueStandings} />
                            : null
                    }
                    {
                        statsBox === 3 ?
                            <LeagueStats leagueStats={leagueStats} />
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleLeague