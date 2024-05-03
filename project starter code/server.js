import express from 'express';
import bodyParser from 'body-parser';
import { query } from 'express-validator';
import { isUrl } from 'check-valid-url';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */

  app.get( "/filteredimage", query("image_url").notEmpty(), async (req, res) => {
    const isValidUrl = isUrl(req.query.image_url);
    //    1. validate the image_url query
    if (!isValidUrl) {
      return res.status(400).send(+ `[${req.query.image_url }]is incorrect!`);
    } 
    //    2. call filterImageFromURL(image_url) to filter the image
    filterImageFromURL(req.query.image_url)
    .then((resolve) => {
    //    3. send the resulting file in the response 
      return res.status(200).sendFile(resolve, err => {
        if (err) {
          res.status(500).send(err);
        }
        deleteLocalFiles([resolve]);
      })
    })
    .catch((error) => {
      return res.status(500).send(error)
    })
  } );
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );


