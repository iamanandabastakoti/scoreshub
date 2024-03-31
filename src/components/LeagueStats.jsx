import React from 'react'

const LeagueStats = ({ leagueStats }) => {
    return (
        <div className='flex flex-col w-full'>
            <table className='bg-primaryBg text-brandColor text-md'>
                <tr className='bg-navbarBg text-primaryBg'>
                    <td className='p-1 w-[15%]'>Rank</td>
                    <td className='p-1 w-[70%]'>Player</td>
                    <td className='p-1 text-center w-[10%]'>Goals</td>
                </tr>
                {
                    leagueStats.map(({ player_place, player_name, team_name, goals }) => {
                        return (
                            <tr className='text-sm border-b border-borderColor last:border-primaryBg'>
                                <td className='py-1 px-2'>{player_place}</td>
                                <td className='flex flex-col'>
                                    <span className='text-[16px]'>{player_name}</span>
                                    <span className='text-[11px]'>{team_name}</span>
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