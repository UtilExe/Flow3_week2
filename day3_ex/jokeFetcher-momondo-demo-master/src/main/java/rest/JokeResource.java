package rest;

import DTO.ChuckDTO;
import DTO.DadDTO;
import DTO.OurDTO;
import com.google.gson.Gson;
import java.io.IOException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import utils.HttpUtils;
import com.google.gson.GsonBuilder;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {

    @Context
    private UriInfo context;
   //  private static Gson gson = new Gson();
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create(); // pretty printing
  
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws IOException {
        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        ChuckDTO chuckDTO = gson.fromJson(chuck, ChuckDTO.class);

        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com/");
        DadDTO dadDTO = gson.fromJson(dad, DadDTO.class);

        OurDTO combinedDTO = new OurDTO(chuckDTO, dadDTO);
   
        String combinedJSON = gson.toJson(combinedDTO);
        return combinedJSON;

    }

}
