const certificateTemplate = ({ id, qrCode }) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href=""/>
        <title>Certificate Template</title>
        <style>
          .flex-box {
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            position: relative;
          }
          .col-12 {
            width:100%;
          }
          .col-6 {
            width:50%;
          }
        </style>
    </head>
    <body>
      <div style="height: 100vh; position:'relative' ">
        <img src=${process.env.SITE_URL}/_next/image?url=%2Fimages%2Ffavicon.svg&w=3840&q=75} style="width:100px; height:100px; position:'relative'; display:'block'"/>
        <h1>Artchive Certificate Template ${id}</h1>
        <p>ARTCHIVE/ART-I/</p>
        <div class="flex-box">
          <div class="col-6">
            <img src="${process.env.NEXT_PUBLIC_S3_URL}/mongodb.png-%40150px" style="width:100px; height:100px; position:'relative'; display:'block' "/>
          </div>
          <div class="col-6">
            <p>Title : <span>Artwork Title</span></p>
            <p>Artist : <span>Artwork Artist</span></p>
            <p>Media : <span>Just in Idea</span></p>
            <p>Size : <span>100 x 150 cm </span></p>
            <p>Artwork Details : <br/> 
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti dolores quibusdam dolorem assumenda quam consequatur 
                nesciunt excepturi voluptatem inventore, ut magnam ex, et, 
                blanditiis culpa! Totam illo officia laudantium magnam.
              </span>
            </p>
          </div>
        </div>
        <div class="flex-box">
          <div class="col-6">
            <div style="width:100px; height:100px; position:'relative'; display='block' ">
            ${qrCode}
            </div>
          </div>
          <div class="col-6">
            <h1>This is Signature</h1>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </body>
    </html>`;
};

export default certificateTemplate;
