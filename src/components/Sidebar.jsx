import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ sidebar, setSidebar }) => {
    // {
    //     leagueId: 3,
    //         leagueLogo: '/topleagues/ucl.png',
    //             leagueName: 'UEFA Champions League',
    //     },
    // {
    //     leagueId: 4,
    //         leagueLogo: '/topleagues/europa.png',
    //             leagueName: 'UEFA Europa League',
    //     },
    const topLeaguesList = [
        {
            leagueId: 152,
            leagueLogo: '/topleagues/pl.png',
            leagueName: 'Premier League',
        },
        {
            leagueId: 302,
            leagueLogo: '/topleagues/laliga.png',
            leagueName: 'LaLiga',
        },
        {
            leagueId: 175,
            leagueLogo: '/topleagues/bundesliga.png',
            leagueName: 'Bundesliga',
        },
        {
            leagueId: 207,
            leagueLogo: '/topleagues/seriea.png',
            leagueName: 'Serie A',
        },
        {
            leagueId: 168,
            leagueLogo: '/topleagues/league1.png',
            leagueName: 'League 1',
        },
    ]
    return (
        <div className={`z-[500] bg-primaryBg text-brandColor h-[100%] top-0 pt-12 px-2 flex flex-col w-full overflow-hidden fixed duration-1000 ${sidebar ? `left-0` : `left-[-100%]`}`}>
            <div className='flex flex-col gap-3 p-2 font-Prompt'>
                <h3 className='text-2xl font-semibold border-b-2 border-brandColor w-fit px-2'>Top Leagues</h3>
                {
                    topLeaguesList.map(({ index, leagueId, leagueLogo, leagueName }) => {
                        return (
                            <NavLink to={`/league/${leagueId}`} key={index} className={({ isActive }) => [
                                `flex gap-2 items-center text-brandColor border-b duration-500 border-brandColor p-2 ${isActive ? 'border-l-[6px] border-b-[6px] border-l-brandColor' : null}`
                            ]} onClick={() => setSidebar(!sidebar)}>
                                <img className='w-8 h-8' src={leagueLogo} alt={leagueName} />
                                <span>{leagueName}</span>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar