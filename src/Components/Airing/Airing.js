import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'
import styled from 'styled-components'


function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()
    const [anime, setAnime] = React.useState({})
    const [showMore, setShowMore] = React.useState(false)

    const {
        title, synopsis,
        trailer,duration,aired,
        season, images, rank,
        score,scored_by, popularity,
        status, rating, source } = anime


    const conditionalRender = () => {
        // if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <div id = "anitems">
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h1>{anime.title}</h1>
                        <p className="description">
                            {showMore ? anime.synopsis : anime.synopsis?.substring(0, 800) + '...'}

                        </p>
                    </div>

                </Link>
            })
        // }
        // else{
        //     return searchResults?.map((anime) => {
        //         return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        //             <img src={anime.images.jpg.large_image_url} alt="" />
        //             <h1>{anime.title}</h1>
        //             <p className="description">
        //                 {showMore ? anime.synopsis : anime.synopsis?.substring(0, 800) + '...'}
        //
        //             </p>
        //         </Link>
        //     })
        // }
    }

    return (
        <PopularStyled>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            {/*<Sidebar />*/}
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;
    .airing-anime{
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 0;
        width: 100%;
        display: grid;
        grid-column: auto;

        //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
      background-color: #FCF3CF;
        border-top: 5px solid #e5e7eb;

      a{
        height: 400px;
        border-radius: 7px ;
        border: 5px solid #e5e7eb;
        width: 90%;
        background-color: #F7DC6F ;
        border-color: #F39C12;
      }
      a img{
        width: 350px;
        height: 390px;
        object-fit: fill;
        border-radius: 5px;
        float:left;
      }
      p{
        color:#34495E;
      }
      h1{
        color:#212F3D;
      }

    }

`;

export default Airing