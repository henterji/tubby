package com.tubby.config;

import static springfox.documentation.builders.PathSelectors.regex;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Swagger2Config {
	@Bean
	public Docket swaggerSpringMvcPlugin() {
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).tags(new Tag("authentication", "用户身份验证"),
				new Tag("authorization", "权限验证"), new Tag("base", "基础模块"), new Tag("samples", "示例")).select()
				.paths(regex("/api.*")).build();
	}

	ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("RESTful APIs").description("Sample web application with spring boot.")
				.termsOfServiceUrl("http://www.sample.com/").version("1.0").build();
	}
}
