import React from 'react'
import { useGlobalContext } from '../../context/global'
import Popular from '../Popular/Popular'
import styled from 'styled-components'
import Upcoming from '../Upcoming/Upcoming'
import Airing from '../Airing/Airing'
import Right from "../Right/Right";
import Twentyten from "../Twentyten/Twentyten";

function Homepage() {

    const {handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
        getAnimeYear
    } = useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            case 'right':
                return <Right rendered={rendered} />
            case 'twentyten':
                return <Twentyten rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        AnimeVost
                    </h1>

                </div>
                <div >
                    <img src = "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700139776.jpg" alt="niggas in paris" id="kart"></img>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter" id = "btnpplr">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular</button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter" id="btnarng">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter" id="btncmng">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>
                    <div id="btnrght">
                        <button onClick={() => {
                            setRendered('right')
                        }}>For right owners</button>
                    </div>
                    <div className="filter-btn popular-filter" id="btnrndm">
                        <button onClick={() => {
                            setRendered('twentyten')
                        }}>Search results</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}

const HomepageStyled = styled.div`
    background-color: #FCF3CF ;
    header{
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;
        @media screen and (max-width:1530px){
            width: 95%;
        }
        #kart{
        position: relative;
        left:-30px;
        top:0px;
          width:1150px;
          height: 400px;
        }
        #btnpplr{
          position: absolute;
          left:80px;
          top:525px;
        }
        #btnarng{
          position:absolute;
          left:200px;
          top:525px;
        }
        #btncmng{
          position:absolute;
          left:305px;
          top:525px;
        }
      #btnrght{
        position:absolute;
        left:430px;
        top:525px;
      }
      #btnrndm{
        position:absolute;
        left:620px;
        top:525px;
      }
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }
        .search-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            button{
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .7rem 1.5rem;
                outline: none;
                border-radius: 1px;
                font-size: 1.2rem;
                background-color: #F7DC6F;
                cursor: pointer;
                transition: all .4s ease-in-out;
                font-family: inherit;
                border: 5px solid #F39C12;
            }
            form{
                position: relative;
                width: 100%;
                .input-control{
                    position: absolute;
                    top:-490px;
                  right: 0px;
                    transition: all .4s ease-in-out;
                }
                .input-control input{
                    width: 100%;
                    padding:.7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 1px;
                    font-size: 1.2rem;
                    background-color: #FCF3CF;
                    border: 5px solid #F39C12;
                    transition: all .4s ease-in-out;
                }
                .input-control button{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`

export default Homepage