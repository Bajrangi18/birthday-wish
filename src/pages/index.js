import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid , ButtonBase } from "@mui/material"
import "../styles.css"
import cakeImage from "../images/cake.webp"
import emojiImage from "../images/emoji.png"
import Confetti from 'react-confetti'

const IndexPage = () => {
  const [mainContent,setMainContent] = React.useState(false)

  React.useEffect(()=>{
    const timer = setTimeout( ()=>setMainContent(true), 500 )
    return () => clearTimeout(timer)
  },[])

  return (
    <Layout>
      <Grid className={mainContent?"main-grid-on":"main-grid-off"} item container xs={12} justifyContent={'center'} minHeight={"100vh"} alignItems={'center'} position={'relative'}>
      <Grid item container xs={12} position={'absolute'} top={0} justifyContent={'center'} overflow={'hidden'} minHeight={"100vh"}>
        <Confetti
          width={"450px"}
          height={"800px"}
          numberOfPieces={100}
        />
      </Grid>
        <Grid className={mainContent?"view-on":"view-off"} item container xs={10} justifyContent={'center'}>
          <Grid className={mainContent?"header-on":"header-off"} item container xs={10} justifyContent={'center'} 
          sx={{
            fontFamily:"'Bebas Neue', sans-serif",
            fontSize:"84px"
          }}>
            Happy
          </Grid>
          <Grid className={mainContent?"header-on":"header-off"} item container xs={10} justifyContent={'center'} 
          sx={{
            fontFamily:"'Bebas Neue', sans-serif",
            fontSize:"104px"
          }}>
            Birthday
          </Grid>
          <Grid className={mainContent?"header-on":"header-off"} item container xs={10} justifyContent={'center'} 
          sx={{
            fontFamily:"'Bebas Neue', sans-serif",
            fontSize:"84px"
          }}>
            Mitali!
          </Grid>
          <Grid item container xs={12} sm={7} md={4}>
            <ButtonBase>
                <img 
                  src={cakeImage}
                  alt="Cake"
                  style={{width:"100%",objectFit:'contain'}}
                />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export const Head = () => <Seo title="Happy Birthday!" />

export default IndexPage
