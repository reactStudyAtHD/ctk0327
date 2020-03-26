package com.ctk0327.reactstudy.common.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Swagger2Config {
    public static final String TAG_1 = "sales";
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                                                      .apis(RequestHandlerSelectors
                                                                    .basePackage(
                                                                            "com.ctk0327.reactstudy.sales.controller"))
                                                      .paths(PathSelectors.regex("/.*"))
                                                      .build().apiInfo(ApiEndPointsInfo())
                                                      .tags(new Tag(TAG_1, "매출에 관한 API"));
    }

    private ApiInfo ApiEndPointsInfo() {
        return new ApiInfoBuilder().title("Spring Boot REST API")
                                   .description("매출 관리 프로그램 REST API")
                                   .version("1.0.0")
                                   .build();
    }
}