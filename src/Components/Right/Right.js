import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/global'
import styled from 'styled-components'


function Right({rendered}) {

    const conditionalRender = () => {
       return <h3>Dear copyright holders!

           If any material presented on our site violates your copyright, or discredits your company by providing incorrect or distorted information, please contact us to resolve this issue.

           To do this, you need to send an e-mail from your corporate mailbox containing:
           - full details of your company, as well as phone and other contact details
           - direct link(s) to the controversial material
           - scanned copies of documents confirming the exclusive right to own the material
           - in case of representing the interests of another company, copies of documents for intermediary services.
           To abuse@animevost.org

           This information will be verified and the administration of the resource will contact you to further resolve the dispute.

           Our project is non-commercial and does not pursue the "trade" in counterfeit material for profit. We give people what large media holdings cannot do yet - we provide the most complete and fresh collection of anime in the Russian-speaking segment of the Internet.

           We always meet the needs of copyright holders and their representatives in case of concluding mutually beneficial agreements and are ready to offer various options for cooperation.

           Sincerely, Administration of AnimeVost.org</h3>
    }

    return (
        <PopularStyled>
            <div className="popular-anime">
                {conditionalRender()}
            </div>
            {/*<Sidebar />*/}
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;
    .popular-anime{
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
            border-radius: 7px;
            border: 5px solid #e5e7eb;
        }
        a img{
          width: 350px;
          height: 390px;
          object-fit: fill;
          border-radius: 5px;
          float:left;
        }
    }
`;

export default Right