import React from 'react';
import './ProductsPage.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Grid,
  Box,
  Paper,
  Typography,
  Divider,
  Card,
  CardActionArea,
  CardMedia
} from '@mui/material';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 3,
    paritialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
    paritialVisibilityGutter: 5
  }
};

const ProductsPage = () => {
  return (
    <div>
      <Box sx={{ ml: 3, mr: 3 }}>
        <Paper sx={{ width: '100%', p: 2 }} elevation={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={8} xl={8}>
              <div className="carousel--container">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/f/i/first3_10aug.jpg"
                        className="d-block w-100 h-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/k/b/kbc_web.jpg
"
                        className="d-block w-100 h-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={4} xl={4}>
              <Card sx={{ maxWidth: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image="https://static2.medplusmart.com/live/bannerImage/Mart/23afddf8ada20d9806f9ff22a542a758.jpg"
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Box>
            <div className="d-flex p-2">
              <Typography>SHOP BY HEALTH CONDITIONS</Typography>
            </div>
            <div className="w-100">
              <Carousel
                swipeable={false}
                draggable={false}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                arrows={true}
                keyBoardControl={true}
                customTransition="all .5"
                containerClass="container-with-dots"
                transitionDuration={500}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                partialVisible
                shouldResetAutoplay
                showDots={false}>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="shop--box d-flex justify-content-around align-items-center">
                    <img
                      className="d-flex justify-content-center align-items-center"
                      src="https://static2.medplusmart.com/live/bannerImage/Mart/aede9ef1f3ebf36a0a1f4556facc4732.jpg"
                      alt="pics"
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    Personalcare
                  </div>
                </div>
              </Carousel>
            </div>
          </Box>
          <Box>
            <div className="d-flex p-2">
              <Typography>SHOP BY HEALTH CONDITIONS</Typography>
            </div>
            <div className="w-100">
              <Carousel
                swipeable={false}
                draggable={false}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                arrows={true}
                keyBoardControl={true}
                customTransition="all .5"
                containerClass="container-with-dots"
                transitionDuration={500}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                partialVisible
                shouldResetAutoplay
                showDots={false}>
                <Paper elevation={4} sx={{ width: '80%', height: '250px', m: 2 }}>
                  <div className="product--container">
                    <div>
                      <img
                        src="https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/f/r/fre0348-1_1.jpg"
                        alt="pic1"
                      />
                    </div>
                    <div>
                      <p>blood reports</p>
                    </div>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <p>MRP</p>
                      <p>Rs:235</p>
                    </div>
                    <Divider />
                    <div className="mt-4">
                      <button>AddToCart</button>
                    </div>
                  </div>
                </Paper>
              </Carousel>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default ProductsPage;
