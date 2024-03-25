import React from 'react'

const Sidebar = ({ sidebar }) => {
    const topLeaguesList = [
        {
            leagueId: '',
            leagueLogo: '/topleagues/ucl.png',
            leagueName: 'UEFA Champions League',
        },
        {
            leagueId: '',
            leagueLogo: '/topleagues/europa.png',
            leagueName: 'UEFA Europa League',
        },
        {
            leagueId: '',
            leagueLogo: '/topleagues/pl.png',
            leagueName: 'Premier League',
        },
        {
            leagueId: '',
            leagueLogo: '/topleagues/laliga.png',
            leagueName: 'LaLiga',
        },
        {
            leagueId: '',
            leagueLogo: '/topleagues/bundesliga.png',
            leagueName: 'Bundesliga',
        },
        {
            leagueId: '',
            leagueLogo: '/topleagues/seriea.png',
            leagueName: 'Serie A',
        },
        {
            leagueId: '',
            leagueLogo: '/topleagues/league1.png',
            leagueName: 'League 1',
        },
    ]
    return (
        <div className={`z-40 bg-primaryBg text-brandColor h-full top-0 pt-12 px-2 flex flex-col w-full overflow-hidden absolute duration-1000 ${sidebar ? `left-0` : `left-[-100%]`}`}>
            <div className='flex flex-col gap-3 p-2 font-Prompt'>
                {
                    topLeaguesList.map(({ index, leagueLogo, leagueName }) => {
                        return (
                            <div key={index} className='flex gap-2 items-center text-brandColor border-b border-brandColor p-2'>
                                <img className='w-8 h-8' src={leagueLogo} alt={leagueName} />
                                <span>{leagueName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar