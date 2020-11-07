package DTO;

import entities.Joke;

public class ChuckDTO {
    
    private String id;
    private String url;
    private String value;

    public ChuckDTO(Joke joke) {
        this.id = joke.getId();
        this.url = joke.getUrl();
        this.value = joke.getValue();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
