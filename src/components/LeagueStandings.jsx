import React from 'react'

const LeagueStandings = ({ leagueStandings }) => {

    return (
        <div className='flex flex-col w-full'>
            <table className='bg-primaryBg text-brandColor text-md sm:text-[14px]'>
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
                    leagueStandings.map(({ overall_promotion, overall_league_position, team_badge, team_name, overall_league_payed, overall_league_W, overall_league_D, overall_league_L, overall_league_GF, overall_league_GA, overall_league_PTS }) => {
                        return (
                            <tr className='text-sm sm:text-[10px] border-b border-borderColor last:border-primaryBg'>
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
            <div className='flex flex-col text-[11px] pt-4 px-2 gap-1'>
                <h5 className='underline'>Qualifications:</h5>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-[#0824e0] w-1 h-full'></span>
                        <span>Promotion - Champions League (Group Stage)</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-[#2dabb1] w-1 h-full'></span>
                        <span>Promotion - Champions League (Qualification)</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-[#ff6d00] w-1 h-full'></span>
                        <span>Promotion - Europa League (Group Stage)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeagueStandings