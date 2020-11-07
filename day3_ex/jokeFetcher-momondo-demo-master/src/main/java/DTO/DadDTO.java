package DTO;

import entities.Joke;

public class DadDTO {
    
    private String id;
    private String joke;
    private int status;
    private String url;

    public DadDTO(Joke joke) {
        this.id = joke.getId();
        this.joke = joke.getJoke();
        this.status = joke.getStatus();
        this.url = joke.getUrl();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
