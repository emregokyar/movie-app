package com.book_library.config;

/*
@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {
    private final String allowedOrigins = "http://localhost:5173";

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration repositoryRestConfiguration, CorsRegistry cors) {
        HttpMethod[] unsupportedActions = {HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PATCH, HttpMethod.PUT};
        repositoryRestConfiguration.exposeIdsFor(Book.class);
        disableHttpMethods(Book.class, repositoryRestConfiguration, unsupportedActions);

        repositoryRestConfiguration.exposeIdsFor(Review.class);
        disableHttpMethods(Review.class, repositoryRestConfiguration, unsupportedActions);

        cors.addMapping(repositoryRestConfiguration.getBasePath() + "/**")
                .allowedOrigins(allowedOrigins);
    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedActions) {
        config.getExposureConfiguration().forDomainType(bookClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions));
    }
}
 */
