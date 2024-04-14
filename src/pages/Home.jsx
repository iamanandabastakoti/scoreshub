import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
    const [pl, setPl] = useState([]);
    const [laliga, setLaliga] = useState([]);
    const [bundesliga, setBundesliga] = useState([]);
    const [seriea, setSeriea] = useState([]);
    const [league1, setLeague1] = useState([]);
    const fetchStandings = async () => {
        // pl
        const plResp = await axios.get(`https://apiv3.apifootball.com/?league_id=152&action=get_standings&APIkey=${import.meta.env.VITE_API_KEY}`);
        setPl(plResp.data);
        // laliga
        const laligaResp = await axios.get(`https://apiv3.apifootball.com/?league_id=302&action=get_standings&APIkey=${import.meta.env.VITE_API_KEY}`);
        setLaliga(laligaResp.data);
        // bundesliga
        const bundesligaResp = await axios.get(`https://apiv3.apifootball.com/?league_id=175&action=get_standings&APIkey=${import.meta.env.VITE_API_KEY}`);
        setBundesliga(bundesligaResp.data);
        // serie-a
        const serieaResp = await axios.get(`https://apiv3.apifootball.com/?league_id=207&action=get_standings&APIkey=${import.meta.env.VITE_API_KEY}`);
        setSeriea(serieaResp.data);
        // league-1
        const league1Resp = await axios.get(`https://apiv3.apifootball.com/?league_id=168&action=get_standings&APIkey=${import.meta.env.VITE_API_KEY}`);
        setLeague1(league1Resp.data);
    }

    const topLeagues = [
        {
            leagueId: 152,
            leagueLogo: '/topleagues/pl.png',
            leagueName: 'Premier League',
            leagueCountry: 'England',
            leaagueTable: pl,
        },
        {
            leagueId: 302,
            leagueLogo: '/topleagues/laliga.png',
            leagueName: 'LaLiga',
            leagueCountry: 'Spain',
            leaagueTable: laliga,
        },
        {
            leagueId: 175,
            leagueLogo: '/topleagues/bundesliga.png',
            leagueName: 'Bundesliga',
            leagueCountry: 'Germany',
            leaagueTable: bundesliga,
        },
        {
            leagueId: 207,
            leagueLogo: '/topleagues/seriea.png',
            leagueName: 'Serie A',
            leagueCountry: 'Italy',
            leaagueTable: seriea,
        },
        {
            leagueId: 168,
            leagueLogo: '/topleagues/league1.png',
            leagueName: 'League 1',
            leagueCountry: 'France',
            leaagueTable: league1,
        },
    ]
    useEffect(() => {
        fetchStandings();
    }, [])
    return (
        <div className='flex flex-col laptop:-center gap-2 tab:gap-4 tab:w-9/12 laptop:w-7/12'>
            <h4 className='text-xl sm:text-[16px] tab:text-2xl font-MontserratAlternate font-bold underline px-2 tab:px-4'>Top Leagues Standings</h4>
            <div className='flex flex-col gap-6'>
                {
                    topLeagues.map(({ leagueId, leagueLogo, leagueName, leagueCountry, leaagueTable }) => {
                        return (
                            <div className='border border-primaryBg w-full min-h-40'>
                                <Link to={`/league/${leagueId}`} className='flex justify-between items-center p-1 bg-primaryBg text-primaryText'>
                                    <div className='flex justify-start items-center gap-2'>
                                        <img className='w-10 sm:w-8 tab:w-14 h-10 sm:h-8 tab:h-14' src={leagueLogo} alt="" />
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg sm:text-md tab:text-2xl font-semibold'>{leagueName}</h3>
                                            <span className='text-sm sm:text-[12px] tab:text-lg text-subTitleColor'>{leagueCountry}</span>
                                        </div>
                                    </div>
                                    <FaAngleRight className='text-2xl tab:text-4xl' />
                                </Link>
                                <table className='bg-primaryBg text-brandColor text-md sm:text-[11px] tab:text-lg laptop:w-full'>
                                    <tr className='bg-navbarBg text-primaryBg font-Anta uppercase'>
                                        <td className='p-1 w-[5%]'>Pos</td>
                                        <td className='p-1 text-start w-[30%]'>Club</td>
                                        <td className='text-center p-1 w-[5%]'>P</td>
                                        <td className='text-center p-1 w-[5%]'>W</td>
                                        <td className='text-center p-1 w-[5%]'>D</td>
                                        <td className='text-center p-1 w-[5%]'>L</td>
                                        <td className='text-center p-1 w-[5%]'>GD</td>
                                        <td className='text-center p-1 w-[5%]'>Pts</td>
                                    </tr>
                                    {
                                        leaagueTable.slice(0, 5).map(({ overall_promotion, overall_league_position, team_badge, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_league_GF, overall_league_GA, overall_league_PTS }) => {
                                            return (
                                                <tr className='text-sm sm:text-[11px] tab:text-lg border-b border-borderColor last:border-primaryBg'>
                                                    <td className={`py-2 px-1 ${overall_promotion === 'Promotion - Champions League (Group Stage: )' ? 'bg-[#0824e0] text-primaryBg' : overall_promotion === 'Promotion - Champions League (Qualification: )' ? 'bg-[#2dabb1] text-primaryBg' : overall_promotion === 'Promotion - Europa League (Group Stage: )' ? 'bg-[#ff6d00] text-primaryBg' : 'bg-primaryBg'}`}>{overall_league_position}</td>
                                                    <td className='py-2 flex gap-1 items-center'>
                                                        <img className='w-4 h-4' src={team_badge} alt="" />
                                                        {team_name}
                                                    </td>
                                                    <td className='py-2 text-center w-8'>{overall_league_payed}</td>
                                                    <td className='py-2 text-center w-8'>{overall_league_W}</td>
                                                    <td className='py-2 text-center w-8'>{overall_league_D}</td>
                                                    <td className='py-2 text-center w-8'>{overall_league_L}</td>
                                                    <td className='py-2 text-center w-8'>{overall_league_GF - overall_league_GA}</td>
                                                    <td className='py-2 text-center w-8'>{overall_league_PTS}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        )
                    })
                }
                <div className='flex flex-col text-[11px] tab:text-lg pt-4 px-2 gap-1'>
                    <h5 className='underline'>Qualifications:</h5>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2 items-center'>
                            <span className='bg-[#0824e0] w-4 h-4'></span>
                            <span>Promotion - Champions League (Group Stage)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='bg-[#2dabb1] w-4 h-4'></span>
                            <span>Promotion - Champions League (Qualification)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='bg-[#ff6d00] w-4 h-4'></span>
                            <span>Promotion - Europa League (Group Stage)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home