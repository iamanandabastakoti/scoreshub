import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PlayerImage = ({ player_key }) => {
    const [playerData, setPlayerData] = useState([]);
    const fetchPlayerImage = async () => {
        const response = await axios.get(`https://apiv3.apifootball.com/?action=get_players&player_id=${player_key}&APIkey=${import.meta.env.VITE_API_KEY}`)
        setPlayerData(response.data);
        // console.log(playerData);
    }
    useEffect(() => {
        fetchPlayerImage();
    }, [])
    return (
        <>
            {
                playerData.slice(0, 1).map(({ player_image }) => {
                    return (
                        <img className='w-8 h-8 rounded-full border border-borderColor bg-borderColor' src={player_image}  alt=""  />
                    )
                })
            }
        </>
    )
}

export default PlayerImage