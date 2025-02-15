import React from 'react'
import PlayerImage from './PlayerImage'

const LeagueStats = ({ leagueStats }) => {
    // console.log(leagueStats)
    return (
        <div className='flex flex-col w-full'>
            <table className='bg-primaryBg text-brandColor text-md sm:text-[12px]'>
                <tr className='bg-navbarBg text-primaryBg font-Anta uppercase'>
                    <td className='p-1 w-[15%]'>Rank</td>
                    <td className='p-1 w-[70%]'>Player</td>
                    <td className='p-1 text-center w-[10%]'>Goals</td>
                </tr>
                {
                    leagueStats.map(({ player_place, player_key, player_name, team_name, goals }) => {
                        return (
                            <tr className='text-sm sm:text-[10px] border-b border-borderColor last:border-primaryBg'>
                                <td className='py-1 px-2'>{player_place}</td>
                                <td className='gap-1 flex items-center'>
                                    <PlayerImage player_key={player_key} />
                                    <div className='flex flex-col'>
                                        <span className='text-[16px] sm:text-[14px]'>{player_name}</span>
                                        <span className='text-[11px] sm:text-[9px]'>{team_name}</span>
                                    </div>
                                </td>
                                <td className='py-1 text-center'>{goals}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default LeagueStats